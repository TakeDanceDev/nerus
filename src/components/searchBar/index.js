import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

const SearchBar = () => {
  return (
    <View style={styles.containerBar}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => console.log('pesquisa pressionada')}>
        <Image
          source={require('../../../assets/search-icon.png')}
          style={styles.searchIcon}
        />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
      </View>
      <TouchableOpacity onPress={() => console.log('filtro pressionado')}>
        <Image
          source={require('../../../assets/Filter.png')}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
