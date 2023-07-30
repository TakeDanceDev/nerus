import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import ReturnHome from '../../components/ReturnHome';
import MonitorRight from '../../components/MonitorRight';



export default function DeviceMonitor () {
  return (
    <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
        <ReturnHome/>
        <View style={styles.BoxText}>
            <Text style={styles.FirstText}>
                Geladeira de Tomate
            </Text>
            <Text style = {styles.SecondText}>
                26 Semanas
            </Text>
        </View>
        <View style={styles.BoxContainer}>
            <Image source={require('../../../assets/geladeira-sombra.png')} resizeMode='contain' style={styles.Geladeira}/>
            <View style ={styles.Right}>
                <MonitorRight />
        </View>
        </View>

    </LinearGradient>
  )
};
const styles = StyleSheet.create ({
Container:{
    flex: 1,
    alignItems:"center",
    
  
},
BoxText:{
    top:80,
    
    
},
FirstText:{
    color: "#fff",
    textAlign:"center",
    fontSize:24,
    fontWeight:'bold',
},
SecondText:{
    color: "#fff",
    textAlign:"center",
    fontSize:14,
    fontWeight:'bold',
},
Right:{
    paddingTop:20
},
Geladeira:{
    width:"50%",
    height:350,
    left:0,
    marginRight:20
    

},
BoxContainer:{
    position:"relative",
    flexDirection:"row",
    justifyContent:"center",
    top:130,
    

}


})
