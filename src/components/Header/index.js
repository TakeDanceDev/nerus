import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Header() {
  const [nome, setnome] = useState(null);
  const [sobrenome, setsobrenome] = useState(null);
  const codigoCliente = 1; // Substitua pelo código do cliente desejado

  useEffect(() => {
    fetch(`http://192.168.1.4:3000/dados/${codigoCliente}`)
      .then(response => response.json())
      .then(data => {
        setnome(data.nome);
        setsobrenome(data.sobrenome); // Adiciona esta linha para atribuir o sobrenome
      })
      .catch(error => { 
        console.error('Ocorreu um erro:', error);
      });
  }, [codigoCliente]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Foto pressionada')}>
        <View style={styles.leftContainer}>
          <View style={styles.shadowContainer}>
            <Image source={require('../../../assets/goofyfoto.png')} style={styles.profileImage} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text style={styles.greetingText}>Olá,</Text>
        <Text style={styles.greetingTextName}>{nome} {sobrenome}</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('Ícone de notificação pressionado')}>
        <View style={styles.rightContainer}>
          <View style={styles.shadowContainer}>
            <Image source={require('../../../assets/sino.png')} style={styles.notificationIcon} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
