import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/searchBar'
import QuickAcessText from '../../components/QuickAcessText'
import QuickAccessMinute from '../../components/QuickAcessBox/QuickAccessMinute'
import Footer from '../../components/footer'

export default function homepage() {
  return (
    <SafeAreaView style={styles.Container}>
    <Header/>
    <SearchBar/>
    <QuickAcessText/>
    <QuickAccessMinute/>
    <Footer/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})