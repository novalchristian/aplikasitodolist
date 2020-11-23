import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nama:</Text>
        <Text>NIM:</Text>
        <Text>Kelompok:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
