import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';

const TestScreen = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [posts, setPosts] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    const fetchPosts = () => {
      fetch('http://18.188.109.230:3000/posts')
        .then(response => response.json())
        .then(data => {
          const isAtBottom = flatListRef.current && flatListRef.current.scrollHeight - flatListRef.current.scrollTop === flatListRef.current.clientHeight;
          setPosts(data);
          if (isAtBottom) {
            flatListRef.current.scrollToEnd({ animated: true });
          }
        })
        .catch(error => console.error('Error fetching posts:', error));
    };

    // 초기 데이터 로드
    fetchPosts();

    // 5초마다 데이터 갱신
    const interval = setInterval(fetchPosts, 5000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, []);

  const handleAddPost = () => {
    const post = {
      Title: title,
      Time: new Date().toISOString().slice(0, 19).replace('T', ' '),
      Contents: contents,
    };

    fetch('http://18.188.109.230:3000/add-post', {
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
          setTitle('');
          setContents('');
          // 새로운 글 추가 후 즉시 데이터 갱신
          fetch('http://18.188.109.230:3000/posts')
            .then(response => response.json())
            .then(data => {
              setPosts(data);
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
      <Text style={styles.title}>{item.Title}</Text>
      <Text style={styles.contents}>{item.Contents}</Text>
      <Text style={styles.time}>{item.Time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Contents"
        value={contents}
        onChangeText={setContents}
        multiline
      />
      <Button title="Add Post" onPress={handleAddPost} />
      <FlatList
        ref={flatListRef}
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.No.toString()}
        style={styles.list}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default TestScreen;
