import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './src/components/footer';
import Header from './src/components/Header';
import SearchBar from './src/components/searchBar';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <Header/>
      <SearchBar/>
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
