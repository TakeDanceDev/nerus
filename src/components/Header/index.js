import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Header() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const codigoCliente = 1; // Substitua pelo código do cliente desejado

  useEffect(() => {
    fetch(`http://192.168.1.4:3000/cliente-registro/${codigoCliente}`)
      .then(response => response.json())
      .then(data => {
        // Extrai o nome e sobrenome do primeiro registro retornado
        const { Nome, Sobrenome } = data[0];
        setNome(Nome);
        setSobrenome(Sobrenome);
      })
      .catch(error => { 
        console.error('Ocorreu um erro:', error);
      });
  }, [codigoCliente]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Foto pressionada')}>
        <View style={styles.leftContainer}>
          <Image source={require('../../../assets/goofyfoto.png')} style={styles.profileImage} />
        </View>
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text style={styles.greetingText}>Olá,</Text>
        <Text style={styles.greetingTextName}>{nome} {sobrenome}</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('Ícone de notificação pressionado')}>
        <View style={styles.rightContainer}>
          <Image source={require('../../../assets/sino.png')} style={styles.notificationIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
  