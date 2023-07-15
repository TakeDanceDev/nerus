import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const QuickAcessText = (props) => {
  return (
    <View style={styles.container}>
      <Text {...props} style={[styles.infoText, props.style]}>{props.texto}</Text>
    </View>
  );
};


export default QuickAcessText;
