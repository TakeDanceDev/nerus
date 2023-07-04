import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Image, Text } from 'react-native';



export default function QuickAcessGroup() {
  const [Umidade, setUmidade] = useState('');
  const [Temperatura, setTemperatura] = useState('');
  const codigoCliente = 1; // Substitua pelo código do cliente desejado

  useEffect(() => {
    fetch(`http://192.168.1.4:3000/cliente-perfil-app/${codigoCliente}`)
      .then(response => response.json())
      .then(data => {
        // Extrai a Umidade e Temperatura do primeiro registro retornado
        const { Umidade, Temperatura } = data[0];
        setUmidade(Umidade);
        setTemperatura(Temperatura);
      })
      .catch(error => { 
        console.error('Ocorreu um erro:', error);
      });
  }, [codigoCliente]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.squareFirst} activeOpacity={0.8}>
          <Text style={styles.percentageText}>10%</Text>
          <Image
            source={require('../../../../assets/reservatorio.png')}
            style={styles.imageBottomRight}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareSecond} activeOpacity={0.8}>
          <Text style={styles.percentageText}>{Umidade}%</Text>
          <Image
            source={require('../../../../assets/humidade.png')}
            style={styles.imageBottomLeft}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.squareThird} activeOpacity={0.8}>
          <Text style={styles.temperatureText}>{Temperatura}°C</Text>
          <Image
            source={require('../../../../assets/temperatura.png')}
            style={styles.imageTopRight}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareFourth} activeOpacity={0.8}>
          <Text style={styles.percentageText}>90%</Text>
          <Image
            source={require('../../../../assets/luz.png')}
            style={styles.imageTopLeft}
            resizeMode="contain"
          />
        </TouchableOpacity>
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
  imageBottomRight: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  imageBottomLeft: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  imageTopRight: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  imageTopLeft: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 5,
    left: 5,
  },
});