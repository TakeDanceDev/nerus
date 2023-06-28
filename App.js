import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './src/components/footer';
import Header from './src/components/Header';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <Header/>
      <Text>Open up App.js to start working on your app!</Text>
      <Footer/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
