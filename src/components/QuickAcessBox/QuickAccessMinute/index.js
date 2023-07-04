import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import QuickAcessImage from '../QuickAcessImage';
import QuickAcessGroup from '../QuickAccessGroup';

export default function QuickAccessMinute() {
  const [countdown, setCountdown] = useState(60); // Valor inicial do tempo (em minutos)

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown === 0) {
        setCountdown(60); // Reseta o tempo quando chegar a 0
      } else {
        setCountdown(countdown - 1);
      }
    }, 60000); // Atualiza a cada 1 minuto (60.000 milissegundos)

    return () => clearInterval(timer); // Limpa o timer ao desmontar o componente
  }, [countdown]);

  return (
    <TouchableOpacity onPress={() => console.log('Acesso Rápido pressionado')} style={styles.container}>
      <View style={styles.rowContainer}>
        <QuickAcessImage style={styles.quickAcessImage} />
        <QuickAcessGroup style={styles.quickAcessGroup} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.squareContainer}>
          <Text style={styles.text}>
            Próxima atualização em {countdown} minutos
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#31a05e',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 60,
    marginHorizontal: 10,
    marginVertical: -10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quickAcessImage: {
    width: 30,
    height: 30,
    // Outros estilos personalizáveis para QuickAcessImage
  },
  quickAcessGroup: {
    // Estilos personalizáveis para QuickAcessGroup
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  squareContainer: {
    borderRadius: 30,
    padding: 8,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
