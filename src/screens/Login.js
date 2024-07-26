import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import iconUser from '../../assets/login/userr.png';
import iconLock from '../../assets/login/lock.png';
import swirlTop from '../../assets/login/swishLogin.png';
import swirlBottom from '../../assets/login/swishh.png';
import gradientBackground from '../../assets/login/gradientBackground.png';


const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={gradientBackground} style={styles.background}>
        <Image source={swirlTop} style={styles.swirlTop} />
        <View style={styles.card}>
          <Text style={styles.welcome}>WELCOME</Text>
          <Text style={styles.loginText}>Login to your account</Text>
          <View style={styles.inputContainer}>
            <Image source={iconUser} style={styles.icon} />
            <TextInput placeholder="Username" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Image source={iconLock} style={styles.icon} />
            <TextInput
              placeholder="  Password"
              secureTextEntry
              style={styles.input}
            />
          </View>
          <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Homescreen')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.separator} />
          </View>
          <TouchableOpacity>
            <Text style={styles.createAccountText}>Create an account</Text>
          </TouchableOpacity>
        </View>
        <Image source={swirlBottom} style={styles.swirlBottom} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  swirlTop: {
    position: 'absolute',
    top: 70,
    left: 0,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingTop: 70,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#594DAD',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  loginText: {
    color: '#606060',
    marginBottom: 20,
    opacity:0.7,
    fontFamily: 'Cochin'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7a42f4',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 20,
    opacity:1,
    fontFamily: 'Cochin'
  },
  loginButton: {
    backgroundColor: '#594DAD',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Cochin'
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#7a42f4',
  },
  orText: {
    color: '#7a42f4',
    paddingHorizontal: 10,
    fontFamily: 'Cochin'
  },
  createAccountText: {
    color: '#8777F7',
    fontFamily: 'Cochin'
  },
  swirlBottom: {
    position: 'absolute',
    bottom: 50,
    right: 0,
  },
});

export default LoginScreen;