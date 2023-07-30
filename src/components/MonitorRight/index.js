import { StyleSheet, Text, Image, View } from 'react-native'
import RightInfoText from './data'
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
            <View style={styles.container}>
              <View style={styles.BoxImages}>
                <View style={styles.infoRight}>
                  {/* Renderizar as imagens */}
                  {RightInfoText.map((item) => (
                    <Image
                      key={item.id}
                      source={item.imagem}
                      resizeMode="contain"
                      style={styles.imageUmidade}
                    />
                  ))}
                </View>
                <View>
                  {/* Renderizar os dados de umidade e fertilizante */}
                  {RightInfoText.map((item) => (
                    <View style={styles.umidade} key={item.id}>
                      <Text style={styles.textoNumUmidade}>{item.porcentagem}</Text>
                      <Text style={styles.textoLetraUmidade}>{item.name}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.LeafBox}>
                {/* Substituir por funções que renderizam a imagem e texto */}
                <Image source={renderImage()} resizeMode="contain" style={styles.LeafImage} />
                <Text style={styles.LeafText}>{renderText()}</Text>
              </View>
            </View>
          );
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
        top: 4,
        height: 50,
        width: 50,
        marginBottom:50
    },
    umidade:{
     justifyContent: "center",
     alignItems: "center",
     marginBottom:55,
     
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
        alignItems:"center",
        
    },
    LeafImage:{
        width:120,
        height:120,
        marginTop:-40
    },
    LeafText:{
        color: "#fff",
        fontSize: 16,

    },
    BoxImages:{
        flexDirection:"row"
    }
     
 })
