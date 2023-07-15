import React from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function DeviceBox() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log("Dispositivo clicado da silva")}>
    <Image source={require('../../../assets/Empty-device.png')} resizeMode="contain" style={styles.DeviceImage}/>
    <Text style={styles.Texto}>Nome da geladeira</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#31a05e',
      height:230,
      width:"92%",
      borderRadius: 60,
      marginHorizontal: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 10,
      alignItems:"center",
      justifyContent:"space-between"
    },
    DeviceImage:{
        marginTop: 30,
        justifyContent:"center",
        alignItems:"center",
        width: 145,
        height: 145,
    },
    Texto:{
        color:"#fafafa",   
        fontSize:16,
        marginBottom:20,
    }
})