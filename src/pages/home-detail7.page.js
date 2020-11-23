import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HomeDetail7 extends Component {
  arr7=[]
  id=0
  state = {
    text: '',
    item7:[
      {id:1, data:"loading"}
    ]
  };

    storedata = async () =>{
      this.arr7.push({id:this.id, data:this.state.text})
      this.id++;
      await AsyncStorage.setItem("mylist7", JSON.stringify(this.arr7))
      this.setState({
        item7: JSON.parse(await AsyncStorage.getItem("mylist7"))
      })
      console.log(this.state)
    }

    async componentDidMount(){
      this.setState({
        item7: JSON.parse(await AsyncStorage.getItem("mylist7")) || ""
      })
      this.arr7=JSON.parse(await AsyncStorage.getItem("mylist7")) || []
      this.id = this.arr7[this.arr7.length-1].id + 1;
    }

  render(){
    if(this.state.item7.length > 0){
      renderList = this.state.item7.map(item7=>{
      return (
        <TouchableOpacity key={item7.id} onPress={()=>{AsyncStorage.removeItem("mylist7")}}>
          <Text style={styles.item} >{item7.data}</Text>
        </TouchableOpacity>
      )
      })
    }else{
      renderList = <Text style={styles.noItems}>No Activity</Text>
    }

    return (
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>ACTIVITY LIST</Text>
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
