import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.nav}>
    <Text style={styles.title}>Todo App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#2c2c2c',
    height: 50,
    marginBottom: 10,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    color: '#f1f1f1'
  }
});

