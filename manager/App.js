import React from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import RouterComponent from './src/Router';

//responsibilities:
//  Show login form
//  Call action creator when user pressess button

export default class App extends React.Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyAWilqfBL1RXy6xJlVB1t6B44DVL5fhKQU',
    authDomain: 'knifelife-test.firebaseapp.com',
    databaseURL: 'https://knifelife-test.firebaseio.com',
    projectId: 'knifelife-test',
    storageBucket: 'knifelife-test.appspot.com',
    messagingSenderId: '669055503274'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
