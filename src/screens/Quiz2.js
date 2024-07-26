import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const Quiz2 = ({navigation}) => {
    const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Where are you located?</Text>
  
      <View style={styles.locationBox}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter city / zip code"
      />
      </View>
      <TouchableOpacity style={styles.enterButton} 
      onPress={() => navigation.navigate('Homescreen')}>
        <Text style={styles.enterButtonText}>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.progress}>2/10</Text>
    </View>
  );
};
export default Quiz2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6fa', // Light purple background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7a42f4', // Purple text color
    marginBottom: 30,
  },
  locationBox:
  {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 17,
    paddingHorizontal: 10,
    width: '80%', // Adjust width as necessary
    alignItems: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
 input: {
    color: '#7a42f4', // Purple text color
    fontSize: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5
 },
  enterButton: {
    backgroundColor: '#7a42f4', // Purple background color for the button
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
  enterButtonText: {
    color: 'white',
    fontSize: 18,
  },
  progress: {
    fontSize: 25,
    color: '#7a42f4', // Purple text color
    marginTop: 20,
  },
});