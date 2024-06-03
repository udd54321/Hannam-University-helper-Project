import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ClassInfoBottomBar = ({ selectedRoom, startRoom, setStartPointer, setArrivalPointer }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [contents, setContents] = useState('');
  const [posts, setPosts] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (selectedRoom) {
      bottomSheetRef.current?.snapToIndex(2); // Scroll up to the top
    }
  }, [selectedRoom]);

  useEffect(() => {
    if (selectedRoom) {
      const fetchPosts = () => {
        const floor = selectedRoom.slice(0, 2); // Extract the floor from the room ID (assuming room IDs are in the format 1F01, 2F01, etc.)
        fetch(`http://18.188.109.230:3000/posts/${floor}`)
          .then(response => response.json())
          .then(data => {
            setPosts(data.filter(post => post.RoomId === parseInt(selectedRoom, 10)));
          })
          .catch(error => console.error('Error fetching posts:', error));
      };

      fetchPosts();
      const interval = setInterval(fetchPosts, 5000);
      return () => clearInterval(interval);
    }
  }, [selectedRoom]);

  const handleAddPost = () => {
    const floor = selectedRoom.slice(0, 2); // Extract the floor from the room ID
    const post = {
      Descrition: contents,
      Data: new Date().toISOString().slice(0, 19).replace('T', ' '),
      RoomId: parseInt(selectedRoom, 10),
    };

    fetch(`http://18.188.109.230:3000/add-post/${floor}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === '글이 성공적으로 추가되었습니다.') {
          Alert.alert('Success', '글이 성공적으로 추가되었습니다.');
          setContents('');
          fetch(`http://18.188.109.230:3000/posts/${floor}`)
            .then(response => response.json())
            .then(data => {
              setPosts(data.filter(post => post.RoomId === parseInt(selectedRoom, 10)));
              flatListRef.current.scrollToEnd({ animated: true });
            })
            .catch(error => console.error('Error fetching posts:', error));
        } else {
          Alert.alert('Error', '글 추가 중 오류 발생.');
        }
      })
      .catch(error => {
        console.error('Error adding post:', error);
        Alert.alert('Error', '글 추가 중 오류 발생.');
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.bubble}>
      <Text style={styles.contents}>{item.Descrition}</Text>
      <Text style={styles.time}>{item.Data}</Text>
    </View>
  );

  const handleSheetChanges = useCallback((index) => {
    setIsBottomSheetOpen(index !== 0);
  }, []);

  const handlePressOutside = useCallback(() => {
    if (isBottomSheetOpen) {
      bottomSheetRef.current?.snapToIndex(0);
    }
  }, [isBottomSheetOpen]);

  return (
    <View style={styles.bottomContainer}>
      {isBottomSheetOpen && (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <View style={styles.bottomSheetOverlay} />
        </TouchableWithoutFeedback>
      )}
      <View style={styles.bottomSheetWrapper}>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          statusBarTranslucent
          enableContentPanningGesture={!isBottomSheetOpen}
        >
          <View style={styles.contentContainer}>
            {selectedRoom && (
              <>
                <Text style={styles.roomText}>Departure: {startRoom}</Text>
                <Text style={styles.roomText}>Arrival: {selectedRoom}</Text>
                <Text style={styles.roomText}>{selectedRoom} 강의실입니다.</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => setStartPointer(selectedRoom)}
                  >
                    <Text style={styles.buttonText}>Set as Departure</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => setArrivalPointer('start')}
                  >
                    <Text style={styles.buttonText}>Set as Arrival</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your message"
                    value={contents}
                    onChangeText={setContents}
                    multiline
                  />
                  <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
                    <Text style={styles.buttonText}>Add Post</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  ref={flatListRef}
                  data={posts}
                  renderItem={renderItem}
                  keyExtractor={item => item.Num.toString()}
                  style={styles.list}
                  onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
                />
              </>
            )}
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

export default ClassInfoBottomBar;

const styles = StyleSheet.create({
  bottomContainer: {
    height: windowHeight,
    width: windowWidth,
    position: 'absolute',
  },
  bottomSheetWrapper: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  bottomSheetOverlay: {
    ...StyleSheet.absoluteFillObject,
    height: windowHeight,
  },
  roomText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  list: {
    marginTop: 16,
  },
  bubble: {
    padding: 16,
    backgroundColor: '#e1ffc7',
    borderRadius: 10,
    marginBottom: 8,
  },
  contents: {
    fontSize: 16,
    marginTop: 8,
  },
  time: {
    fontSize: 12,
    color: '#555',
    marginTop: 8,
    textAlign: 'right',
  },
});
