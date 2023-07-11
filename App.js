import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Homepage from './src/Screens/Homepage';
import LoginPage from './src/Screens/LoginPage';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <LoginPage/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
