import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import ReturnMenu from '../ReturnMenu';


export default function MenuNotifica (){
  return (
    <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
      <ReturnMenu/>
      <Text>MenuNotifica</Text>
    </LinearGradient>
  )
}
const styles = StyleSheet.create ({
Container:{
  flex: 1,
}





});