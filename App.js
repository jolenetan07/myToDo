import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'complete myStars console app', key: '1' },
    { text: 'design portfolio website', key: '2' },
    { text: 'create myBTS app', key: '3' },
    { text: 'drink coffee', key: '4' },
    { text: 'watch crossed love', key: '5' },
    { text: 'got7 weekly idol', key: '6' },
    { text: 'in the soop season 2', key: '7' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      {/* header */}
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        {/* add todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20,

  }
});
