import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import ReturnHome from '../../components/ReturnHome';
import MonitorRight from '../../components/MonitorRight';
import MonitorBottom from '../../components/MonitorBottom';



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
       <View style = {styles.Bottom}>
            <MonitorBottom/>

       </View>
        </View>

    </LinearGradient>
  )
};
const styles = StyleSheet.create({
    Container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1a5432", // Define a cor de fundo diretamente no LinearGradient
    },
    BoxText: {
      alignItems: "center",
      marginTop: 80,
    },
    FirstText: {
      color: "#fff",
      fontSize: 24,
      fontWeight: 'bold',
    },
    SecondText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: 'bold',
    },
    Right: {
      alignItems: "flex-end",
      paddingTop: 50,
      left: 20,
    },
    Bottom: {
      alignItems: "flex-start",
      paddingTop: 20,
      bottom: 300,
      right: 25,
    },
    Geladeira: {
      width: "50%",
      height: 350,
      bottom: 150,
    },
    BoxContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      width: "100%", // Adicione esta linha para garantir que o BoxContainer ocupe toda a largura
    },
  });
  