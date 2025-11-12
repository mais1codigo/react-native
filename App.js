import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: 'João Victor Gomes'
    };

    this.entrar = this.entrar.bind(this); // Corrigi aqui
  }

  entrar() {
    this.setState({
      nome: 'Leandro'
    });
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <Button title="Entrar" onPress={this.entrar} />
        <Text style={{ fontSize: 30, color: 'blue', textAlign: "center" }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

export default App;
