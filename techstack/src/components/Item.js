import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class Item extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { item, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{item.description}</Text>
        </CardSection>
      );
    }
  }


  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.item;


    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectItem(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedItemID === ownProps.item.id;
  console.log('item map state to props executing');
  return { expanded };
};

//first argument is for mapStateToProps, second is for actionsCreators
export default connect(mapStateToProps, actions)(Item);


const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingVertical: 3,
  },
};
