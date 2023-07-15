import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginPage from './src/Screens/LoginPage';
import RegisterPage from './src/Screens/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/Screens/Homepage';
import DevicePage from './src/Screens/DevicePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DevicePage" component={DevicePage} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
