import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import ReturnHome from '../../components/ReturnHome';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DeviceAdd(){
    return (
        <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
          <ReturnHome/>
          <Text style={styles.FirstText}>
            Vamos adicionar seu {'\n'} dispositivo
          </Text>
          <Image 
          source={require('../../../assets/device-wifi.png')} 
          resizeMode="contain" 
          style={styles.AddImage}/>
          <Text style={styles.SecondText}>
            Você pode pesquisar por dispositivo próximo {"\n"} 
            ou escanear por código QR
          </Text>
          <TouchableOpacity style={styles.FirstBox}>
            <View style={styles.SpacingFirst}>
              <Text style={styles.TextBox}>
                Ler QR code
              </Text>
              <Image 
                source={require('../../../assets/QRCode.png')} 
                resizeMode="contain" 
                style={styles.SecondImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SecondBox}>
            <View style={styles.SpacingSecond}>
              <Text style={styles.TextBox}>
                Bluetooth
              </Text>
              <Image 
                source={require('../../../assets/bluetooth.png')} 
                resizeMode="contain" 
                style={styles.ThirdImage}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>
      );
 
}
const styles = StyleSheet.create({
    Container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
   
    },
    AddImage:{
      marginVertical:60,
      width:145,
      height:145,
    },
    FirstBox:{
      borderWidth:2,
      borderRadius:50,
      borderColor:"#31A05E"
    },
    SecondBox:{
      marginTop:20,
      borderRadius:50,
      backgroundColor:"#31A05E"
    },
    FirstText:{
      color:"#fff",
      margin:10,
      textAlign:"center",
      fontSize:24,
      fontWeight:'bold',
      
    },
    SecondText:{
      color:"#fff",
      textAlign:"center",
      fontSize:16,
      fontWeight:'bold',
      paddingBottom:30,
      
    },
    SpacingFirst:{
      width:300,
      height:53,
      alignItems:"center",
      justifyContent:'space-around',
      flexDirection: "row",
      
    },
    SpacingSecond:{
      width:300,
      height:55,
      alignItems:"center",
      justifyContent:'space-around',
      flexDirection: "row",
      
    },
    SecondImage:{
      width:30,
      height:30,
      right:0
    },
    TextBox:{
      color:"#fff",
      fontSize:20,
      left:50
    }
  })

