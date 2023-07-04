import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './src/components/footer';
import Header from './src/components/Header';
import SearchBar from './src/components/searchBar';
import QuickAcessText from './src/components/QuickAcessText';
import QuickAccessMinute from './src/components/QuickAcessBox/QuickAccessMinute';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <Header/>
      <SearchBar/>
      <QuickAcessText/>
      <QuickAccessMinute/>
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
