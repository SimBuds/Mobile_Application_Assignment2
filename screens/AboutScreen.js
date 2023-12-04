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

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1f1f1f',
    elevation: 4,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
    borderColor: '#f0f0f0',
    borderWidth: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginBottom: 20,
  },
  info: {
    fontSize: 20,
    color: '#f0f0f0',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    minWidth: '60%',
    marginVertical: 10,
  },
};
