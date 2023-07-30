import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import React from 'react'

export default function ReturnHome () {

    const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('HomePage');
  };


  return (
    <TouchableOpacity style={styles.container} onPress={handleHome}>
     <Image source={require('../../../assets/arrow-back.png')} resizeMode="contain" style = {styles.back}/>
     <Text style = {styles.texto}>Página Inicial</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
   container:{
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    top: 50,
    left: 10,
   },
   back:{
    height: 20,
   },
   texto:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    bottom: 3,

   }
    
})