import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
  const [isSquareMeter, setIsSquareMeter] = useState(false);
  const [roomSize, setRoomSize] = useState('');
  const [flooringPrice, setFlooringPrice] = useState('');
  const [installationCost, setInstallationCost] = useState('');
  const [flooringCost, setFlooringCost] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [tax, setTax] = useState('');
  const navigation = useNavigation();

  const navigateToAbout = () => {
    navigation.navigate('About');
  };

  const calculateCost = () => {
    const size = parseFloat(roomSize);
    const pricePerUnit = parseFloat(isSquareMeter ? flooringPrice : flooringPrice * 0.092903);
    const installation = size * parseFloat(installationCost);
    const flooring = size * pricePerUnit;
    const total = flooring + installation;
    const calculatedTax = total * 0.13;

    setFlooringCost(flooring.toFixed(2));
    setTotalCost(total.toFixed(2));
    setTax(calculatedTax.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room Cost Calculator</Text>
      <Text style={styles.label}>Size of the room:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter size"
        onChangeText={(text) => setRoomSize(text)}
        value={roomSize}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Unit of measurement:</Text>
      <Switch
        value={isSquareMeter}
        onValueChange={() => setIsSquareMeter(!isSquareMeter)}
      />
      <Text style={styles.label}>Price per unit of flooring:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        onChangeText={(text) => setFlooringPrice(text)}
        value={flooringPrice}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Price per unit of installation:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        onChangeText={(text) => setInstallationCost(text)}
        value={installationCost}
        keyboardType="numeric"
      />
      <Button title="Calculate" onPress={calculateCost} />
      <Text style={styles.result}>Installation cost before tax: ${flooringCost}</Text>
      <Text style={styles.result}>Flooring cost before tax: ${installationCost}</Text>
      <Text style={styles.result}>Total cost (installation + flooring) before tax: ${totalCost}</Text>
      <Text style={styles.result}>Tax: ${tax}</Text>
      <Button title="Go to About Page" onPress={navigateToAbout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    color: 'white',
    marginTop: 8,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    padding: 8,
    marginBottom: 24,
    color: 'white',
  },
  result: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
    marginBottom: 16,
  },
});
