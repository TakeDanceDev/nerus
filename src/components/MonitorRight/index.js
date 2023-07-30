import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import RightInfoText from './junk'

export default function MonitorRight() {
  const progresso = 10;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.imagem} source={item.imagem} resizeMode="contain" />
      <Text style={styles.TextoNome}>{item.name}</Text>
    </View>
  );

  const getRightInfoById = (id) => {
    const item = RightInfoText.find((info) => info.id === id);
    return item ? item : null;
  };

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
    } else {
      // Valor inválido, retornar uma imagem padrão ou nula
      return null;
    }
  };

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
    } else {
      // Valor inválido, retornar uma mensagem padrão
      return "Progresso inválido";
    }
  };

  const rightInfoId = "1"; // O id que você deseja utilizar para obter as informações
  const rightInfo = getRightInfoById(rightInfoId);

  return (
    <View style={styles.container}>
      <View style={styles.infoRight}>
        <Image source={require('../../../assets/umidade-sombra.png')} resizeMode="contain" style={styles.imageUmidade} />
        <View style={styles.umidade}>
          <Text style={styles.textoNumUmidade}>86%</Text>
          <Text style={styles.textoLetraUmidade}>Umidade</Text>
        </View>
      </View>
      <View style={styles.infoRight}>
        <Image source={require('../../../assets/fertilizante.png')} resizeMode="contain" style={styles.imageUmidade} />
        <View style={styles.umidade}>
          <Text style={styles.textoNumUmidade}>86%</Text>
          <Text style={styles.textoLetraUmidade}>Fertilizante</Text>
        </View>
      </View>
      <View style={styles.LeafBox}>
        <Image source={renderImage()} resizeMode="contain" style={styles.LeafImage} />
        <Text style={styles.LeafText}>{renderText()}</Text>
      </View>
      {rightInfo && (
        <View style={styles.RightInfoContainer}>
          <Text style={styles.RightInfoName}>{rightInfo.name}</Text>
          <Text style={styles.RightInfoPorcentagem}>{rightInfo.porcentagem}</Text>
          <Image source={rightInfo.imagem} resizeMode="contain" style={styles.RightInfoImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
  
    },
    infoRight:{
        marginBottom: 20,
        flexDirection : "row",
       

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
