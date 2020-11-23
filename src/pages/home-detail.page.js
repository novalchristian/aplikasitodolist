import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToDoItem from './toDoItem';
import AddToDo from './addToDo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HomeDetail extends Component {
  arr=[]
  id=0
  state = {
    text: '',
    item:[
      {id:1, data:"loading"}
    ]
  };

    storedata = async () =>{
      this.arr.push({id:this.id, data:this.state.text})
      this.id++;
      await AsyncStorage.setItem("mylist", JSON.stringify(this.arr))
      this.setState({
        item: JSON.parse(await AsyncStorage.getItem("mylist"))
      })
      console.log(this.state)
    }

    async componentDidMount(){
      this.setState({
        item: JSON.parse(await AsyncStorage.getItem("mylist")) || ""
      })
      this.arr=JSON.parse(await AsyncStorage.getItem("mylist")) || []
      this.id = this.arr[this.arr.length-1].id + 1;
    }

  render(){
    if(this.state.item.length > 0){
      renderList = this.state.item.map(item=>{
      return (
        <TouchableOpacity key={item.id} onPress={()=>{AsyncStorage.removeItem("mylist")}}>
          <Text style={styles.item} >{item.data}</Text>
        </TouchableOpacity>
      )
      })
    }else{
      renderList = <Text style={styles.noItems}>No Items</Text>
    }
    return (
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>List</Text>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder='Apa yang ingin kamu lakukan?'
            value={this.state.text}
            onChangeText={text => this.setState({text})}
          />
          <TouchableOpacity style={styles.button} onPress={this.storedata} >
              <Text style={styles.buttonText}>Input</Text>
          </TouchableOpacity>
        </View>
        <View>
          {renderList}
        </View>
      </View>
  
  )};
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  noItems:{
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 20,
  },
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
  item:{
    padding:16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  inputWrapper:{
    flexDirection: 'row', 
    marginHorizontal:20, 
    marginTop:20, 
    justifyContent: 'space-between'
  },
  textInput:{
    flex:3,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingLeft: 10,
  },
  button:{
    justifyContent: 'center', 
    alignItems: 'center', 
    flex:1, 
    backgroundColor: 'green', 
    borderRadius: 50, 
    marginLeft:10, 
    width:80
  },
  buttonText:{
    color: '#fff'
  }
  
});
