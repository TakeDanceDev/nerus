import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import QuickAcessImage from '../QuickAcessImage';
import QuickAcessGroup from '../QuickAccessGroup';

export default function QuickAccessMinute() {
  return (
    <TouchableOpacity onPress={() => console.log('Acesso Rápido pressionado')} style={styles.container}>
      <View style={styles.rowContainer}>
        <QuickAcessImage style={styles.quickAcessImage} />
        <QuickAcessGroup style={styles.quickAcessGroup} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.squareContainer}>
          <Text style={styles.text}>
            Nome da geladeira
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#31a05e',
    paddingHorizontal: 8,
    borderRadius: 60,
    marginHorizontal: 10,
    shadowColor: '#000000',
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
  },
  textContainer: {
    alignItems: 'center',
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
