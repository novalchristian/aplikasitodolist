import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToDoItem from './toDoItem';
import AddToDo from './addToDo';

export default function HomeDetail({route, navigation}) {
  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  const {day} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>{day}</Text>
      </View>
      <AddToDo submitHandler={submitHandler}/>
      <FlatList 
        data={todos}
        renderItem={({item}) => (
          <ToDoItem item={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width,
  },
  topWrapper: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'dodgerblue',
  },
  
});
