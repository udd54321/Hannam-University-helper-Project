import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const TestScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authorId, setAuthorId] = useState('');

  const handleAddTopic = () => {
    const topic = {
      title,
      description,
      author_id: authorId,
    };

    fetch('http://18.188.109.230:3000/add-topic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(topic),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === '토픽이 성공적으로 추가되었습니다.') {
        Alert.alert('Success', '토픽이 성공적으로 추가되었습니다.');
      } else {
        Alert.alert('Error', '토픽 추가 중 오류 발생.');
      }
    })
    .catch(error => {
      console.error('Error adding topic:', error);
      Alert.alert('Error', '토픽 추가 중 오류 발생.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Topic</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Author ID"
        value={authorId}
        onChangeText={setAuthorId}
        keyboardType="numeric"
      />
      <Button title="Add Topic" onPress={handleAddTopic} />
    </View>
  );
};

//sadfsdsdfsdfsdafsfsdfdsfsdfsdfsd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
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
});

export default TestScreen;
