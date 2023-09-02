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
import MenuDados from './src/components/MenuDados';
import MenuConfig from './src/components/MenuConfig';
import MenuSobre from './src/components/MenuSobre';
import MenuNotifica from './src/components/MenuNotifica';
import MenuHelp from './src/components/MenuHelp';
import MenuDadosComp from './src/components/MenuDadosComp';


const Stack = createStackNavigator();

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={Routes}/>
          <Stack.Screen name="MenuPage" component={MenuPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="DeviceMonitor" component={DeviceMonitor} />
          <Stack.Screen name="DeviceAdd" component={DeviceAdd} />
          <Stack.Screen name="MenuDados" component={MenuDados} options={{ title: 'Meus Dados' }} />
          <Stack.Screen name="MenuDadosComp" component={MenuDadosComp} options={{ title: 'Suporte' }} /> 
          <Stack.Screen name="MenuConfig" component={MenuConfig} options={{ title: 'Configurar o App' }} />
          <Stack.Screen name="MenuSobre" component={MenuSobre} options={{ title: 'Sobre a Hidroponia' }} />
          <Stack.Screen name="MenuNotifica" component={MenuNotifica} options={{ title: 'Notificações' }} />
          <Stack.Screen name="MenuHelp" component={MenuHelp} options={{ title: 'Suporte' }} /> 
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