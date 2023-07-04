import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function QuickAcessImage() {
  return (
    <View >
        <Image
          source={require('../../../../assets/geladeira.png')}
          style={styles.geladeiraImage}
          resizeMode="contain"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  geladeiraImage: {
    width: 145,
    height: 145,
  }
});

