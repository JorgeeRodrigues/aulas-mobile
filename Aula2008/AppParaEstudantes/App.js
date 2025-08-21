// App.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Olá, Jorge</Text>
      <Text style={styles.subtitle}>Bem-vindo ao seu painel</Text>

      <View style={styles.menu}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#007bff' }]}>
          <Text style={styles.buttonText}>NOTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#28a745' }]}>
          <Text style={styles.buttonText}>AULAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9b30ff' }]}>
          <Text style={styles.buttonText}>AVISOS</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Próximas atividades</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Trabalho de Matemática</Text>
        <Text style={styles.cardText}>Entrega: 20/08</Text>
      </View>

      <View style={[styles.card, styles.importantCard]}>
        <Text style={styles.cardTitle}>Prova de Física (Importante)</Text>
        <Text style={styles.cardText}>Data: 22/08</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Leitura de História</Text>
        <Text style={styles.cardText}>Cap. 3 e 4</Text>
      </View>

      <Text style={styles.sectionTitle}>Chamada para ação</Text>

      <View style={styles.callToAction}>
        <Text style={styles.callText}>Adquira um novo curso e continue aprendendo!</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>COMPRAR CURSO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  importantCard: {
    backgroundColor: '#e0ecff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardText: {
    fontSize: 13,
  },
  callToAction: {
    marginTop: 20,
    backgroundColor: '#fafafa',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  callText: {
    marginBottom: 10,
    fontSize: 14,
  },
  buyButton: {
    backgroundColor: '#9b30ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
