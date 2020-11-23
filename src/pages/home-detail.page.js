import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeDetail({route, navigation}) {
  const {day} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>{day}</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Apa yang ingin kamu lakukan ?"
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Input</Text>
        </TouchableOpacity>
        </View>
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
