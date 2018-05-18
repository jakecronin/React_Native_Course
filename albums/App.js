import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


export default class App extends React.Component {
  render() {
    console.log('App rendering');
    return (
      <View style={styles.container}>
        <Header headerText={'Albums!!!'} />
        <AlbumList />
      </View>
    );
  }
}

// Formatting for base of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
