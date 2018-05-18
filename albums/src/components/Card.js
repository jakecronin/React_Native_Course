import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}  //render any children
    </View>
  );
};

export default Card;


const styles = {
  containerStyle:{
    borderWidth: 1,
    borderRadius: 2,  //rounded corners
    borderColor: '#ddd',
    borderBottomWidth: 0, //remove bottom of border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};
