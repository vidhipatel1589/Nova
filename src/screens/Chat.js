import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet, SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // make sure to install react-native-vector-icons

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'I am excited to attend WEHack UTD with you!', time: '10:30am', sender: 'other' },
    { id: 2, text: 'Hey, I can’t wait to see you tomorrow!', time: '10:33am', sender: 'me' },
    // ... more messages
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = { id: messages.length + 1, text: inputText, time: new Date().toLocaleTimeString(), sender: 'me' };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/landing-background.png')}
      style={styles.container}>
        
      <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.safeArea}  behavior="padding">
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Icon name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Image style={styles.img} source={require('../../assets/pfp2.png')} />
            <Text style={styles.name}>Vidhi Patel</Text>
          </View>
          <Icon name="call" size={30} color="#fff" />
        </View>
        <ScrollView style={styles.messagesContainer}>
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.messageBubble,
                message.sender === 'me' ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.messageTime}>{message.time}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message here"
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Icon name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a51ae',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    backgroundColor: 'transparent',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20,
    marginTop: 8,
    maxWidth: '70%',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
    
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#6a51ae',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#A8A6AD',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  messageTime: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'flex-end',
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Align items in the center
    alignItems: 'center', // Align items in the center
    padding: 15,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow direction and distance
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3,
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 8,
    backgroundColor: '#fff',
    borderRadius: 25,
    color: '#333',
  },
  sendButton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#6a51ae'
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 20,
  },
});

export default Chat;