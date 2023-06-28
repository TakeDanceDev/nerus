import React from "react";
import { View, Image, TouchableOpacity, handleIconPress } from "react-native";
import styles from "./style";

export default function Footer(){
    return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleIconPress('home')}>
        <Image source={require('../../../assets/home.png')} style={styles.homeIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('search')}>
        <Image source={require('../../../assets/shop.png')} style={styles.shopIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('heart')}>
        <Image source={require('../../../assets/incubator.png')} style={styles.incubatorIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('user')}>
        <Image source={require('../../../assets/help.png')} style={styles.helpIcon} />
      </TouchableOpacity>
    </View>
    )
}