import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

let days = [
  {
    id: 1,
    day: 'Senin',
  },
  {
    id: 2,
    day: 'Selasa',
  },
  {
    id: 3,
    day: 'Rabu',
  },
  {
    id: 4,
    day: 'Kamis',
  },
  {
    id: 5,
    day: 'Jumat',
  },
  {
    id: 6,
    day: 'Sabtu',
  },
  {
    id: 7,
    day: 'Minggu',
  },
];

export default function Home({navigation}) {
  const onPressCard = (days) => {
    navigation.navigate('HomeDetail', days);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>TO DO LIST</Text>
      </View>
      {days.map((days) => (
        <TouchableOpacity
          key={days.id}
          style={styles.dayWrapper}
          onPress={() => onPressCard(days)}>
          <Text style={styles.dayText}>{days.day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  dayText: {
    fontSize: 17,
  },
  dayWrapper: {
    marginTop: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'dodgerblue',
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  topWrapper: {
    backgroundColor: 'dodgerblue',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width,
  },
});
