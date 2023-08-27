import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ReturnMenuDados from '../ReturnMenuDados';



export default function MenuDadosComp (){
  return (
    <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
      <ReturnMenuDados/>
      <Text>MenuDadosComp</Text>
    </LinearGradient>
  )
}
const styles = StyleSheet.create ({
Container:{
  flex: 1,
}





});