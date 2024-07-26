import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Matching = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/matchingBG.png')} // Replace with your background image
      style={styles.background}
    >
      <Text style={styles.header}>Your Stars have aligned...</Text>
     
      {/* Profile Images */}
      <View style={styles.profileContainer}>

        <Image
          source={require('../../assets/pfp1.png')} // Replace with your first profile image
          style={styles.profileImage}
        />
      
      <Image 
        source={require('../../assets/solar_stars-bold.png')}
        style={styles.matchStar}
        />

        <Image
          source={require('../../assets/pfp2.png')} // Replace with your second profile image
          style={styles.profileImage}
        />
       
      </View>
      
      <Text style={styles.footer}>...now make sure your schedules align</Text>
      
      <TouchableOpacity style={styles.messageButton}
      onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.messageButtonText}>Send a Message</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 80, // Depending on the device's status bar height
    paddingBottom: 70,
  },
  header: {
    paddingTop: 50,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Cochin',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profileImage: {
    width: 176, // Set your desired size
    height: 175,
    borderRadius: 300, // Make it round
    borderWidth: 2,
    borderColor: '#5A008F'
  },
  footer: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Cochin',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  messageButton: {
    backgroundColor: 'purple', // Use your specific color
    borderRadius: 25,
    paddingVertical: 23,
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
    fontFamily: 'Cochin',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  matchStar: {
    paddingHorizontal: 40,
    Top: 16, // Depending on the device's status bar height
    paddingBottom: 100,

  },

});

export default Matching;