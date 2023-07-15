import React from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function DeviceAdd() {
  return (
    <TouchableOpacity style={styles.container}>
        <Image source={require('../../../../assets/Plus.png')} resizeMode="contain" style={styles.PlusImage}/>
        <Text style={styles.Texto}>Adcionar Dispositivo</Text>
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
    PlusImage:{
        marginTop: 75,
        justifyContent:"center",
        alignItems:"center",
        width: 60,
        height: 60,
    },
    Texto:{
        color:"#fafafa",   
        fontSize:16,
        marginBottom:40,
    }
})
