import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import ReturnHome from '../../components/ReturnHome';
import MonitorRight from '../../components/MonitorRight';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DeviceMonitor () {
  return (
    <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
        <ReturnHome/>
        
        <Text style={styles.FirstText}>
           Geladeira de Tomate
        </Text>

        <Text style = {styles.SecondText}>
            26 Semanas
        </Text>

        <View style ={styles.Right}>
        <MonitorRight />
        </View>






    </LinearGradient>
  )
};
const styles = StyleSheet.create ({
Container:{
    flex: 1,
    alignItems:"center",
   
  
},
FirstText:{

    color: "#fff",
    top: 0,
    margin:10,
    textAlign:"center",
    fontSize:24,
    fontWeight:'bold',
},
SecondText:{
    top: 20,
    color: "#fff",
    textAlign:"center",
    fontSize:14,
    fontWeight:'bold',
},
Right:{
top:100
},
Geladeira:{
    

}


})
