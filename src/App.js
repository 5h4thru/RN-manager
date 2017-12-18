import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(
      reducers,
      {} /*initial state we might want to pass to redux application*/,
      applyMiddleware(ReduxThunk)
    );
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
