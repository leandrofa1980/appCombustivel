import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {

  const [number, onChangeNumber] = useState();

  function calcular() {
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/iconBomba.png')}
        style={styles.image}
      />
      <Text style={styles.title}>
        Qual  melhor opção?
      </Text>
    
      <Text style={styles.text}>
        Álcool preço por litro
      </Text>

      <TextInput 
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />

      <Text style={styles.text}>
        Gasolina preço por litro
      </Text>

      <TextInput 
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      <Button style={styles.button}
      title='Calcular'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 200,
    height: 200
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  text: {
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    padding: 20,
  },
});
