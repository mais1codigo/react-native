import React from "react";
import { View, Text, Image, ScrollView, FlatList, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <View style={{ alignItems:"center" }}>
      <Text style={{ fontSize: 25, color: 'blue', textAlign: "center" }}>
        Olá, tudo bem?
      </Text>

      <Image
        source={require('./src/barco.png')}
        style={{ width: 300, height: 300 }}
      />
      <FlatList
      data={[{ key: 'Arroz' }, { key: 'Feijão' }, { key: 'Açucar' }]}
      renderItem={({ item }) => <Text>{item.key}</Text>}/>


      <TextInput
        placeholder="Digite seu nome"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginTop: 20, paddingLeft: 10 }}
      />

      <View style={{ marginTop: 20 }}>
      <Button title="Cadastrar" onPress={() => alert('Cadastro concluído com sucesso!')} /> 
      </View>

    </View>
    </ScrollView>
  );
};

export default App;
