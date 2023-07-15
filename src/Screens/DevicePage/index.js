import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/footer';
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
      <View style={styles.fixedContainer}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollViewContent}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          <DeviceBox/>
          <DeviceAdd/>
          <DeviceAdd/>
        </ScrollView>
      </View>
      <Footer/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    paddingLeft: 25
  },
  fixedContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})
