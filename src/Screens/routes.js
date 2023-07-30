import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./Homepage";
import DevicePage from "./DevicePage";
import ShopPage from "./ShopPage";
import HelpPage from "./HelpPage";
import { Image } from "react-native";


const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown:false, 
        
        tabBarStyle:{ 
          backgroundColor:'#0d2818',
          borderTopWidth: 0,
          
        }}}
      
    >
      <Tab.Screen name="HomePage" component={HomePage} 
      options={{
        title:'Inicio', 
        tabBarShowLabel:false,
        tabBarIcon: ({size,focused,color}) => {
          
          if(focused){
            return <Image
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
            source={require('../../assets/home-pressed.png')}
            />
          }
          return <Image
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
          source={require('../../assets/home.png')}
          />
    }}}/>
      <Tab.Screen name="ShopPage" component={ShopPage} 
      options={{
        title:'Dispositvos', 
        tabBarShowLabel:false,
        tabBarIcon: ({size,focused,color}) => {
          
          if(focused){
            return <Image
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
            source={require('../../assets/shop-pressed.png')}
            />
          }
          return <Image
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
          source={require('../../assets/shop.png')}
          />
    }}}/>

      <Tab.Screen name="DevicePage" component={DevicePage} 
      options={{
        title:'Dispositvos', 
        tabBarShowLabel:false,
        tabBarIcon: ({size,focused,color}) => {
          
            if(focused){
              return <Image
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
              source={require('../../assets/incubator-pressed.png')}
              />
            }
            return <Image
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
            source={require('../../assets/incubator.png')}
            />
      }}}/>

      <Tab.Screen name="HelpPage" component={HelpPage} 
      options={{
        title:'Dispositvos', 
        tabBarShowLabel:false,
        tabBarIcon: ({size,focused,color}) => {
          
          if(focused){
            return <Image
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
            source={require('../../assets/help-pressed.png')}
            />
          }
          return <Image
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
          source={require('../../assets/help.png')}
          />
    }}}/>
    </Tab.Navigator>
  );
}