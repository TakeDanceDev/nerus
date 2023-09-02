import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebase';


export default function RegisterPage() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => { setPasswordVisible(!isPasswordVisible); };
  const handleCreateAccount = () => { navigation.navigate('LoginPage'); };

  const handleSignUp = () => {
    // Verifica se o email é válido antes de criar a conta
    if (!isValidEmail(email)) {
      alert('O endereço de email não é válido.');
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message));
  };

  // Função para verificar se o email é válido
  const isValidEmail = (email) => {
    // Utilize uma expressão regular para verificar o formato do email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} resizeMode='contain' />

        <Text style={styles.title}>Criar conta</Text>

        <Text style={styles.subtitle}>Crie uma conta para continuar</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} 
          placeholder="Nome"
          placeholderTextColor="#AFAFAF"
          value={nome}
          onChangeText={setNome}
           />

          <TextInput style={styles.input} 
          placeholder="Sobrenome" 
          placeholderTextColor="#AFAFAF"
          value={sobrenome}
          onChangeText={setSobrenome}
          />
          <TextInput style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#AFAFAF"
          value={email}
          onChangeText={setEmail}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!isPasswordVisible}
              placeholder="Senha"
              placeholderTextColor="#AFAFAF"
              value={password}
              onChangeText={setPassword}
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

        <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
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
