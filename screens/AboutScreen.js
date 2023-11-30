import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avatar from '../IMG_20231125_131603.jpg'; 


export default function AboutScreen() {
  const navigation = useNavigation();

  const navigateToMain = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image
        source={Avatar}
        style={styles.avatar}
      />
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.info}>Your Full Name: Casey Hsu</Text>
        <Text style={styles.info}>Your Student ID: 101376814</Text>
        <Button title="Go to Main Screen" onPress={navigateToMain} color={styles.button.backgroundColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#1f1f1f',
    elevation: 3,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    width: '80%',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16, 
    borderColor: '#f0f0f0',
    borderWidth: 2
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0f0f0', 
    marginBottom: 16,
  },
  info: {
    fontSize: 18,
    color: '#f0f0f0',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
  },
});