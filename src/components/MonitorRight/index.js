import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'


export default function MonitorRight () {

    const progresso = 10

    const renderImage = () => {
        if (progresso >= 0 && progresso <= 14) {
          return require('../../../assets/progresso-0.png');
        } else if (progresso >= 15 && progresso <= 34) {
          return require('../../../assets/progresso-25.png');
        } else if (progresso >= 35 && progresso <= 59) {
          return require('../../../assets/progresso-50.png');
        } else if (progresso >= 60 && progresso <= 94) {
          return require('../../../assets/progresso-75.png');
        } else if (progresso >= 95 && progresso <= 100) {
          return require('../../../assets/progresso-100.png');
        }}

    const renderText = () => {
        if (progresso >= 0 && progresso <= 14) {
            return "0% Para a colheita";
        } else if (progresso >= 15 && progresso <= 34) {
            return "25% Para a colheita";
        } else if (progresso >= 35 && progresso <= 59) {
            return "50% Para a colheita";
        } else if (progresso >= 60 && progresso <= 94) {
            return "75% Para a colheita";
        } else if (progresso >= 95 && progresso <= 100) {
            return "Pode colher seus frutos";
        }}

  return (
    <View style ={styles.container}>
        <View style={styles.}>
                <View style = {styles.infoRight}>
                    <Image source={require('../../../assets/umidade-sombra.png')} resizeMode="contain" style = {styles.imageUmidade}/>
                    <Image source={require('../../../assets/fertilizante.png')} resizeMode="contain" style = {styles.imageUmidade}/>
                </View>
            <View>
                <View style = {styles.umidade}>
                        <Text style = {styles.textoNumUmidade}>86%</Text>
                        <Text style = {styles.textoLetraUmidade}>Umidade</Text>  
                </View>
                <View style = {styles.umidade}>
                    <Text style = {styles.textoNumUmidade}>40%</Text>
                    <Text style = {styles.textoLetraUmidade}>Fertilizante</Text>  
                </View>
            </View>
        </View>
        <View style={styles.LeafBox}>
            <Image source={renderImage()} resizeMode="contain" style={styles.LeafImage}/>
            <Text style={styles.LeafText}>{renderText()}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
  
    },
    infoRight:{
        marginBottom: 20,
        flexDirection : "column",
       

    },
    imageUmidade:{
        top: 8,
        height: 50,
        width: 50,
    },
    umidade:{
     justifyContent: "center",
     alignItems: "center",
     
    },
    textoNumUmidade:{
     color: "#fff",
     fontSize: 20,
     fontWeight: "bold",
     paddingLeft: 10,
 
 
    },
    textoPercentUmidade:{
        color: "#fff",
      
        fontSize: 16,
        paddingLeft: 10,
        
    },
    textoLetraUmidade:{
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
        paddingLeft: 10,
        
    },
    LeafBox:{
        justifyContent:"center",
        alignItems:"center"
    },
    LeafImage:{
        width:120,
        height:120
    },
    LeafText:{
        color: "#fff",
        fontSize: 16,

    }
     
 })
