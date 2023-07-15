import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/searchBar'
import QuickAcessText from '../../components/Title'
import QuickAccessMinute from '../../components/QuickAcessBox/QuickAccessMinute'
import Footer from '../../components/footer'
import { LinearGradient } from 'expo-linear-gradient'

export default function HomePage() {
 

  return (
    <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
    <Header />
    <SearchBar />
    <QuickAcessText texto="Acesso Rápido"/>
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
  },
})