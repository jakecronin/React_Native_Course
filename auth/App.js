import firebase from 'firebase';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDqB-mL-MSVo_TKjCZXo5o9MFIni5Ww0YM',
      authDomain: 'auth-bed9f.firebaseapp.com',
      databaseURL: 'https://auth-bed9f.firebaseio.com',
      projectId: 'auth-bed9f',
      storageBucket: 'auth-bed9f.appspot.com',
      messagingSenderId: '1069095496095'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
