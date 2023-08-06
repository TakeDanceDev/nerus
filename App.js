// APP.js

import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginPage from './src/Screens/LoginPage';
import RegisterPage from './src/Screens/RegisterPage';
import DeviceAdd from './src/Screens/DeviceAdd';
import DeviceMonitor from './src/Screens/DeviceMonitor';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/Screens/routes';
import MenuPage from './src/Screens/MenuPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MenuPage" component={MenuPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="HomePage" component={Routes}/>
          <Stack.Screen name="DeviceMonitor" component={DeviceMonitor} />
          <Stack.Screen name="DeviceAdd" component={DeviceAdd} />
        
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