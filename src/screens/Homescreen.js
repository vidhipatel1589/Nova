import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import homepage from '../../assets/homepage.png';

const Homescreen = ({navigation}) => {

  return (
    <ImageBackground source={homepage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome, Hiba!</Text>
        <Text style={styles.events}>Events Near You</Text>
      </View>
      <TouchableOpacity style={styles.event1}
      onPress={() => navigation.navigate('Matching')}>
        <Image
          source={require('../../assets/wehack.png')}
          style={styles.clickableImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.event2}
      onPress={() => navigation.navigate('Matching')}>
        <Image
          source={require('../../assets/fair.png')}
          style={styles.clickableImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.messageButton}
      onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.messageButtonText}>Take Quiz!</Text>
      </TouchableOpacity>

    </ImageBackground>


  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: "flex-start",
    right: 70,
    top: 80,
    fontFamily: 'Cochin',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  events: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 170,
    fontFamily: 'Cochin',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  clickableImage: {
    width: 210,
    height: 110,
    resizeMode: 'stretch',
  },
  event1: {
    position: 'absolute',
    top: 245,
    left: 8,
    resizeMode: 'stretch',
  },
  event2: {
    position: 'absolute',
    top: 540,
    right:35,
    resizeMode: 'stretch',

  },
  messageButton: {
    backgroundColor: 'purple', // Use your specific color
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginBottom: 30,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
  messageButtonText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Cochin'
  }
});

export default Homescreen;