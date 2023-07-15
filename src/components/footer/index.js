import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from "./style";
import HomePage from "../../Screens/Homepage";

export default function Footer(){
  const navigation = useNavigation();
  const route = useRoute();

  const handleHome = () => {
    navigation.navigate('HomePage');
  };

  const handleDevices = () => {
    navigation.navigate('DevicePage');
  };

  const images = {
    home: {
      active: require('../../../assets/home-pressed.png'),
      inactive: require('../../../assets/home.png'),
    },
    shop: {
      active: require('../../../assets/shop-pressed.png'),
      inactive: require('../../../assets/shop.png'),
    },
    incubator: {
      active: require('../../../assets/incubator-pressed.png'),
      inactive: require('../../../assets/incubator.png'),
    },
    help: {
      active: require('../../../assets/help-pressed.png'),
      inactive: require('../../../assets/help.png'),
    },
  };

  const [isHomeActive, setHomeActive] = useState(false);
  const [isShopActive, setShopActive] = useState(false);
  const [isIncubatorActive, setIncubatorActive] = useState(false);
  const [isHelpActive, setHelpActive] = useState(false);

  useEffect(() => {
    if (navigation.isFocused()) {
      setHomeActive(false);
      setShopActive(false);
      setIncubatorActive(false);
      setHelpActive(false);
    }
  }, [navigation.isFocused()]);

  useEffect(() => {
    if (navigation.isFocused()) {
      if (route.name === 'HomePage') {
        setHomeActive(true);
      } else if (route.name === 'DevicePage') {
        setIncubatorActive(true);
      }
    }
  }, [navigation.isFocused(), route.name]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHome}>
        <Image 
          source={isHomeActive ? images.home.active : images.home.inactive} 
          style={styles.homeIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image 
          source={isShopActive ? images.shop.active : images.shop.inactive} 
          style={styles.shopIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDevices}>
        <Image 
          source={isIncubatorActive ? images.incubator.active : images.incubator.inactive} 
          style={styles.incubatorIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image 
          source={isHelpActive ? images.help.active : images.help.inactive} 
          style={styles.helpIcon} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
    </View>
  );
}
