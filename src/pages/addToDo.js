import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function addToDo({submitHandler}) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Apa yang ingin kamu lakukan ?"
          onChangeText={changeHandler}
        />
        <TouchableOpacity style={styles.button} onPress={() => submitHandler(text)} >
            <Text style={styles.buttonText}>Input</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
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
})

