import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/searchBar'
import QuickAcessText from '../../components/QuickAcessText'
import QuickAccessMinute from '../../components/QuickAcessBox/QuickAccessMinute'
import Footer from '../../components/footer'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'

export default function HomePage() {
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate('HomePage');
  };
  

  return (
    <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
    <Header/>
    <SearchBar/>
    <QuickAcessText/>
    <QuickAccessMinute/>
    <Footer/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})