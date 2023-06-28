import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={require('../../../assets/goofyfoto.png')} style={styles.profileImage} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.greetingText}>Olá,</Text>
        <Text style={styles.greetingText}>Goofy Ass</Text>
        
      </View>
      <View style={styles.rightContainer}>
        <Image source={require('../../../assets/sino.png')} style={styles.notificationIcon} />
      </View>
    </View>
  );
};
