import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Footer(){
  const [isHomeActive, setHomeActive] = useState(false);
  const [isShopActive, setShopActive] = useState(false);
  const [isIncubatorActive, setIncubatorActive] = useState(false);
  const [isHelpActive, setHelpActive] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        setHomeActive(false);
        setShopActive(false);
        setIncubatorActive(false);
        setHelpActive(false);
      }}>
        <Image 
          source={isHomeActive ? require('../../../assets/home.png') : require('../../../assets/home-pressed.png')} 
          style={styles.homeIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setHomeActive(true);
        setShopActive(true);
        setIncubatorActive(false);
        setHelpActive(false);
      }}>
        <Image 
          source={isShopActive ? require('../../../assets/shop-pressed.png') : require('../../../assets/shop.png')} 
          style={styles.shopIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setHomeActive(true);
        setShopActive(false);
        setIncubatorActive(true);
        setHelpActive(false);
      }}>
        <Image 
          source={isIncubatorActive ? require('../../../assets/incubator-pressed.png') : require('../../../assets/incubator.png')} 
          style={styles.incubatorIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setHomeActive(true);
        setShopActive(false);
        setIncubatorActive(false);
        setHelpActive(true);
      }}>
        <Image 
          source={isHelpActive ? require('../../../assets/help-pressed.png') : require('../../../assets/help.png')} 
          style={styles.helpIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
    </View>
  );
}
