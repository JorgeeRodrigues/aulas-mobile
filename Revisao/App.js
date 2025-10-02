
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [tela, setTela] = useState('home');
  const [atividade, setAtividade] = useState('');
  const [duracaoMin, setDuracaoMin] = useState('');
  const [categoria, setCategoria] = useState('');
  const [treinos, setTreinos] = useState([]);

  function adicionarTreino() {
    if (atividade && duracaoMin && categoria) {
      setTreinos([...treinos, { id: Date.now().toString(), atividade, duracaoMin, categoria }]);
      setAtividade('');
      setDuracaoMin('');
      setCategoria('');
    }
  }

  function excluirTreino(id) {
    setTreinos(treinos.filter(t => t.id !== id));
  }

  if (tela === 'home') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bem-vindo ao App de Treinos!</Text>
        <Button title="Ir para Treinos" onPress={() => setTela('treinos')} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text></Text>
       <Text></Text>
        <Text></Text>
      <Text style={{ fontSize: 18, marginVertical: 8 }}>Cadastro de Treino</Text>
      <TextInput placeholder="Atividade" value={atividade} onChangeText={setAtividade} style={{ borderWidth: 1, marginBottom: 8, padding: 4 }} />
      <TextInput placeholder="Duração (min)" value={duracaoMin} onChangeText={setDuracaoMin} keyboardType="numeric" style={{ borderWidth: 1, marginBottom: 8, padding: 4 }} />
      <TextInput placeholder="Categoria" value={categoria} onChangeText={setCategoria} style={{ borderWidth: 1, marginBottom: 8, padding: 4 }} />
      <Button title="Adicionar Treino" onPress={adicionarTreino} />
      <Text></Text>
      <Button title="Voltar" onPress={() => setTela('home')} />

      <Text style={{ marginTop: 16, fontWeight: 'bold' }}>Lista de Treinos</Text>
      <FlatList
        data={treinos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
            <Text>{item.atividade} - {item.duracaoMin}min - {item.categoria}</Text>
            <TouchableOpacity onPress={() => excluirTreino(item.id)} style={{ marginLeft: 8 }}>
              <Text style={{ color: 'red' }}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}