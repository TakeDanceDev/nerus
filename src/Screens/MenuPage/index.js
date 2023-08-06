import { StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import ReturnHome from '../../components/ReturnHome';
import opcoes from './data';

const renderItem = ({ item, index }) => {
  const itemStyle = [styles.itemContainer];

  // Aplica a borda na cor #c9c9c9 apenas ao primeiro item (Meus Dados)
  if (index === 0) {
    itemStyle.push(styles.firstItemBorder);
  }

  return (
    <TouchableOpacity style={itemStyle} onPress={() => console.log('Botão clicado: ', item.title)}>
      <Image source={item.imagem} style={styles.itemImage} resizeMode="contain" />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Image source={item.irpara} style={[styles.arrowBackImage, { transform: [{ scaleX: -1 }] }]} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default function MenuPage() {
  const [nome, setNome] = useState(null);
  const [sobrenome, setSobrenome] = useState(null);
  const codigoCliente = 1; // Substitua pelo código do cliente desejado

  useEffect(() => {
    fetch(`http://192.168.0.103:3000/dados/${codigoCliente}`)
      .then(response => response.json())
      .then(data => {
        setNome(data.nome);
        setSobrenome(data.sobrenome); // Adiciona esta linha para atribuir o sobrenome
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }, [codigoCliente]);

  return (
    <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
      <TouchableOpacity onPress={() => console.log('teste')}>
        <View style={styles.upperContainer}>
          <View style={styles.upperLeftContainer}>
            <View style={styles.imageAndTextContainer}>
              <Image source={require('../../../assets/goofyfoto.png')} resizeMode='contain' style={styles.profileImage} />
              {nome && sobrenome && (
                <View style={styles.userNameContainer}>
                  <Text style={styles.userName}>{`${nome} ${sobrenome}`}</Text>
                  <Text style={styles.date}>Desde 2023</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <FlatList
          data={opcoes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
        <TouchableOpacity style={styles.disconnectButton} onPress={() => console.log('Botão Desconectar pressionado')}>
          <Text style={styles.disconnectButtonText}>Desconectar</Text>
        </TouchableOpacity>
      </View>
      <ReturnHome />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  profileImage: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
    paddingTop: 120, // Adicionamos paddingTop para ajustar a posição vertical
  },
  upperLeftContainer: {
    alignItems: 'center', // Alinha os itens verticalmente
  },
  imageAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameContainer: {
    marginLeft: 35,
    alignItems: "center"
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 12,
  },
  contentContainer: {
    padding: 20,
  },
  flatListContent: {
    // Estilos para o conteúdo da FlatList (opcional)
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#c9c9c9',
  },
  itemImage: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
  },
  firstItemBorder: {
    borderTopWidth: 1,
    
  },
  arrowBackImage: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
  },
  disconnectButton: {
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: "#31a05e",
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  disconnectButtonText: {
    color: 'white',
    fontSize: 16,
  },
});