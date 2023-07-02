import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Footer(){
    return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Home pressionada')}>
        <Image source={require('../../../assets/home.png')} style={styles.homeIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Loja pressionada')}>
        <Image source={require('../../../assets/shop.png')} style={styles.shopIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Incubadora pressionada')}>
        <Image source={require('../../../assets/incubator.png')} style={styles.incubatorIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Foto pressionada')}>
        <Image source={require('../../../assets/help.png')} style={styles.helpIcon} />
      </TouchableOpacity>
    </View>
    )
}