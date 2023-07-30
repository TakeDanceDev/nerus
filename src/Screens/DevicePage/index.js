import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/searchBar';
import QuickAcessText from '../../components/Title';
import dispositivos from './data';
import { useNavigation } from '@react-navigation/native';

export default function DevicePage() {

  const navigation = useNavigation();

  const handleAdd = () => {
    navigation.navigate('DeviceAdd');
  };



  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.textContainer}>
        <QuickAcessText texto="Meus Dispositivos" style={styles.Text} />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={dispositivos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <TouchableOpacity style={styles.containerAdd} onPress={handleAdd}>
          <Image source={require('../../../assets/Plus.png')} resizeMode="contain" style={styles.PlusImage}/>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <Image style={styles.imagem} source={item.imagem} resizeMode="contain" />
    <Text style={styles.TextoNome}>{item.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    zIndex: 2, // Define uma ordem maior para o Header ficar acima dos outros elementos
    position: 'relative', // Adiciona a posição relativa para manter o fluxo do layout
    width: '100%',
  },
  searchBarContainer: {
    zIndex: 2, // Define uma ordem maior para o SearchBar ficar acima dos outros elementos
    position: 'relative', // Adiciona a posição relativa para manter o fluxo do layout
    width: '100%',
    right:30
  },
  contentContainer: {
    flex: 1,
    paddingTop: 215,
    width: '100%',
    borderRadius:60
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    top:240,
    left:15
  },
  Text: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  imagem: {
    width: 145,
    height: 145,
    paddingHorizontal: 150,
  },
  TextoNome: {
    paddingTop: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: "#31a05e",
    borderRadius: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 1,
  elevation: 10,
  },
  flatListContent: {
    flexGrow: 1,
    alignItems: 'center',
    borderRadius:60,
  },
  PlusImage:{
    justifyContent:"center",
    alignItems:"center",
    width: 40,
    height: 40,
    padding:10,
    margin:10
    
},
Texto:{
    color:"#fafafa",   
    fontSize:16,
},
containerAdd: {
  backgroundColor: '#31a05e',
  borderRadius: 60,
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 1,
  elevation: 10,
  alignItems:"center",
  justifyContent:"center",
  marginTop:5
},
});
