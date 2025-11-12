import React from "react";
import { View, Text, Image } from 'react-native';

const App = () => {
  return (
    <View style={{ alignItems:"center" }}>
      <Text style={{ fontSize: 25, color: 'blue', textAlign: "center" }}>
        Olá programadores, tudo bem?
      </Text>

      <Image
        source={require('./src/barco.png')}
        style={{ width: 300, height: 300 }}
      />

      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }}
        style={{ width: 400, height: 390, marginTop: 100 }}
      />
    </View>
  );
};

export default App;
