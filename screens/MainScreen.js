import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

export default function MainScreen() {
  const [isSquareMeter, setIsSquareMeter] = useState(false);
  const [roomSize, setRoomSize] = useState(50);
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
    const size = roomSize;
    const pricePerUnit = parseFloat(isSquareMeter ? flooringPrice : flooringPrice * 0.092903);
    const installationPrice = parseFloat(installationCost);
  
    if (!isNaN(size) && !isNaN(pricePerUnit) && !isNaN(installationPrice)) {
      const installation = size * installationPrice;
      const flooring = size * pricePerUnit;
      const total = flooring + installation;
      const calculatedTax = total * 0.13;
  
      setFlooringCost(flooring.toFixed(2));
      setTotalCost(total.toFixed(2));
      setTax(calculatedTax.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculatorContainer}>
        <Text style={styles.title}>Room Cost Calculator</Text>

        <View style={styles.grid}>
          <Text style={styles.label}>Size of the room: {roomSize} sqm</Text>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={0}
            maximumValue={100}
            step={1}
            onValueChange={(value) => setRoomSize(value)}
            value={roomSize}
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
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a', // dark grey background
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatorContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    elevation: 5,
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '30%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    color: '#f0f0f0',
    marginTop: 8,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 4,
    padding: 8,
    marginBottom: 24,
    color: '#f0f0f0',
    backgroundColor: '#333',
  },
  result: {
    fontSize: 16,
    color: '#f0f0f0',
    marginTop: 8,
    marginBottom: 16,
  },
});