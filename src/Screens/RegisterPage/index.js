import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function RegisterPage() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
 
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate('LoginPage');
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} resizeMode='contain' />

        <Text style={styles.title}>Criar conta</Text>

        <Text style={styles.subtitle}>Crie uma conta para continuar</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Nome" />
          <TextInput style={styles.input} placeholder="Sobrenome" />
          <TextInput style={styles.input} placeholder="Email" />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!isPasswordVisible}
              placeholder="Senha"
            />
            <TouchableOpacity style={styles.passwordVisibilityButton} onPress={togglePasswordVisibility}>
              <Image
                source={isPasswordVisible ? require('../../../assets/eye.png') : require('../../../assets/eye-off.png')}
                style={styles.passwordVisibilityIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.alreadyHaveAccount}>Já possui conta?</Text>

        <TouchableOpacity style={styles.loginButton} onPress={handleCreateAccount}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    marginBottom: 10,

  },
  passwordVisibilityButton: {
    opacity: 0.5,
    padding: 5,
  },
  passwordVisibilityIcon: {
    width: 20,
    height: 20,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#31A05E',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#FAFAFA',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  alreadyHaveAccount: {
    marginBottom: 10,
  },
  loginButton: {
    paddingHorizontal: 24,
  },
  loginButtonText: {
    color: '#009CEA',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
