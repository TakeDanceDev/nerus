import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react'
import Header from '../../components/Header';
import SearchBar from '../../components/searchBar';
import QuickAcessText from '../../components/Title';
import DeviceBox from '../../components/DeviceBox';
import DeviceAdd from '../../components/DeviceBox/DeviceAdd';

export default function DevicePage(){
  const scrollViewRef = useRef(null);

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, []);

  return (
    <LinearGradient style={styles.Container} colors={["#1a5432", "#0d2818"]}>
      <Header/>
      <SearchBar/>
      <QuickAcessText texto="Meus Dispositivos" style={styles.Text}/>
      <ScrollView
          ref={scrollViewRef}
          
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          position="relative"
          top={250}
          width="90%"
          justifyContent='space-between'
          
        >
          <DeviceBox/>
          <DeviceAdd/>
          

        </ScrollView>
       
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    alignItems: "center",
  },
  Text: {
    paddingLeft: 25
  },
  fixedContainer: {
    top:0,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  scrollViewContent: { 
    
    alignItems: 'center',

  }
})
