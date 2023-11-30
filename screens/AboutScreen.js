import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();

  const navigateToMain = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.info}>Your Full Name: Casey Hsu</Text>
      <Text style={styles.info}>Your Student ID: 101376814</Text>
      <Button title="Go to Main Screen" onPress={navigateToMain} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  info: {
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
  },
});
