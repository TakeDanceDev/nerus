// APP.js
import * as React from "react";
import Navigation from './Navigation';
import "react-native-gesture-handler"
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {GoogleAuthProvider, onAuthStateChanged, signInWithCredential, singInWithCredential} from "firebase/auth";
import {auth} from "./firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginPage from "./src/Screens/LoginPage";

WebBrowser.maybeCompleteAuthSession()

export default function App() {
  const [userInfo, setUserInfo] = React.useState()
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:"728572144581-uims638jdc9pip8r2seob050hp4b6f4d.apps.googleusercontent.com",
    androidClientId:"728572144581-65cdnsqqsbflo64aral2se3rds0j2226.apps.googleusercontent.com",
    expoClientId: "728572144581-lj2aodld7982n0lg19p1ldlgc2gv06v6.apps.googleusercontent.com",
  })

  React.useEffect(() => {
    if( response?.type == "success"){
      const {id_token} = response.params;
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  return (
    <LoginPage promptAsync={promptAsync}/>
  );
}
