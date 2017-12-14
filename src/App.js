import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBjQw_woMePUMgQAb6XqMTZ-ZFJPiIdhyE',
      authDomain: 'rn-manager-25488.firebaseapp.com',
      databaseURL: 'https://rn-manager-25488.firebaseio.com',
      projectId: 'rn-manager-25488',
      storageBucket: '',
      messagingSenderId: '117864236531'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
