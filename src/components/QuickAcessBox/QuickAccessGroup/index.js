import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Image, Text } from 'react-native';

export default function QuickAcessGroup() {

  

  const [Umidade, setUmidade] = useState('');
  const [Temperatura, setTemperatura] = useState('');
  const [Luz, setLuz] = useState('');
  const [Reservatorio, setReservatorio] = useState('');
  const codigoCliente = 1; // Substitua pelo código do cliente desejado

  useEffect(() => {
    fetch(`http://192.168.0.17:3000/cliente-perfil-app/${codigoCliente}`)
      .then(response => response.json())
      .then(data => {
        setUmidade(data.Umidade);
        setTemperatura(data.Temperatura);
        setLuz(data.Luz);
        setReservatorio(data.Reservatorio); // Adiciona esta linha para atribuir o sobrenome
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }, [codigoCliente]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.squareFirst} activeOpacity={0.8}>
          <Text style={styles.percentageText}>{Reservatorio}%</Text>
          <Image
            source={require('../../../../assets/reservatorio.png')}
            style={styles.imageTopLeft}
            resizeMode="contain"
          />
        </View>
        <View style={styles.squareSecond} activeOpacity={0.8}>
          <Text style={styles.percentageText}>{Umidade}%</Text>
          <Image
            source={require('../../../../assets/humidade.png')}
            style={styles.imageTopRight}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.squareThird} activeOpacity={0.8}>
          <Text style={styles.temperatureText}>{Temperatura}°C</Text>
          <Image
            source={require('../../../../assets/temperatura.png')}
            style={styles.imageLeftBottom}
            resizeMode="contain"
          />
        </View>
        <View style={styles.squareFourth} activeOpacity={0.8}>
          <Text style={styles.percentageText}>{Luz}%</Text>
          <Image
            source={require('../../../../assets/luz.png')}
            style={styles.imageRightBottom}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareFirst: {
    width: 90,
    height: 90,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareSecond: {
    width: 90,
    height: 90,
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareThird: {
    width: 90,
    height: 90,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareFourth: {
    width: 90,
    height: 90,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 16,
    color: 'white',
  },
  temperatureText: {
    fontSize: 16,
    color: 'white',
  },
  imageTopLeft: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 10,
    alignItems:"center"
  },
  imageTopRight: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 10,
    alignItems:"center"
  },
  imageLeftBottom: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 10,
    alignItems:"center"
  },
  imageRightBottom: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 10,
    alignItems:"center"
  },
});
