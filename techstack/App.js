import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import ItemList from './src/components/ItemList';

export default class App extends React.Component {


  render() {
    const { containerStyle, headerStyle } = styles;

    console.log('starting app');
    return (
      <Provider store={createStore(reducers)}>
        <View style={containerStyle}>
          <Header style={headerStyle} headerText={'Tech Stack'} />
          <ItemList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  headerStyle: {
    alignSelf: 'stretch',
  },
});
