/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Button from '../components/Button'


export default class App extends Component {
  static navigationOptions = {
    title: 'Home of Our app',
  };
  
  addTodo = () => {
    this.setState({
      list: [...this.state.list, this.state.newTodo],
      newTodo: ''
    })
  }
  state = {
    list: ['Bangun', 'Mandi'],
    newTodo: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is a Xavier Fox To-do</Text>
        {this.state.list.map(each => <Text key={each} style={{fontSize: 20, margin: 5}}>🚀 {each}</Text>) }
        <TextInput 
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({newTodo: text})}
          value={this.state.newTodo}
        />
        <Button 
          fn={this.addTodo}
          title="Add Todo"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
