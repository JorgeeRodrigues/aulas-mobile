import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App do Jorge!                              digite algo para imprimir.</Text>
      <Image
        source={{ uri: 'https://share.google/images/3k8Yt8TQ94UR05q6f' }}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={texto}
        onChangeText={setTexto}
      />
      <Button
        title="Clique aqui"
        onPress={() => alert(`Você digitou: ${texto}`)}
      />
      <Text style={styles.output}>Você escreveu: {texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 12,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  output: {
    marginTop: 12,
    fontSize: 18,
  },
});
