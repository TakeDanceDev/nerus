import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('HomePage');
  };
  
  const handleCreateAccount = () => {
    navigation.navigate('RegisterPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerContent}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} resizeMode="contain" />

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Bem Vindo(a)!</Text>
            <Text style={styles.subtitle}>Entre para continuar</Text>
          </View>

          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            placeholderTextColor="#AFAFAF"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Senha"
              placeholderTextColor="#AFAFAF"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.passwordVisibilityButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                resizeMode="contain"
                source={showPassword ? require('../../../assets/eye-off.png') : require('../../../assets/eye.png')}
                style={styles.passwordVisibilityIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordButtonText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Ou</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialMediaContainer}>
            <TouchableOpacity>
              <Image source={require('../../../assets/google.png')} style={styles.socialMediaIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../../assets/facebook.png')} style={styles.socialMediaIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../../assets/twitter.png')} style={styles.socialMediaIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <Text style={styles.createAccountText}>Não tem uma conta?</Text>
          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
            <Text style={styles.createAccountButtonText}> Criar agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  containerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    top:30,
    width: 220,
    height: 220,
    marginBottom: 50,
  },
  titleContainer: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputEmail: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#AFAFAF',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#AFAFAF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingLeft: 10,
  },
  passwordInput: {
    flex: 1,
  },
  passwordVisibilityButton: {
    borderColor: '#AFAFAF',
    padding: 5,
  },
  passwordVisibilityIcon: {
    opacity: 0.5,
    width: 20,
    height: 20,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#31A05E',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    right: 30,
  },
  forgotPasswordButtonText: {
    color: '#009CEA',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 100,
    marginTop: 30,
    marginBottom: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor:"#000",
    marginHorizontal: 5,
  },
  dividerText: {
    fontSize: 14,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  socialMediaIcon: {
    width: 60,
    height: 60,
    margin: 10,
  },
  createAccountText: {
    marginTop: 30
  },
  createAccountButton: {
    marginBottom: 10,
  },
  createAccountButtonText: {
    color: '#009CEA',
  },
};

export default LoginPage;
