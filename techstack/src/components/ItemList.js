import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, SectionList, View } from 'react-native';
import Item from './Item';

class ItemList extends Component {
  componentWillMount() {

  }

  render() {
    const { sectionHeaderStyle, headerTextStyle } = styles;
    return (
      <SectionList
        renderItem={({ item }) => (<Item item={item} />)}
        renderSectionHeader={({ section }) => (
            <View style={sectionHeaderStyle}>
              <Text style={headerTextStyle}>{section.title}</Text>
            </View>
          )}
        sections={[{ title: 'Topics', data: this.props.items }]}
        extraData={this.props.selectedItemID}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log('item list state mapping to props');
  return ({
    items: state.items,
    selectedItemID: state.selectedItemID,
  });
};

// LibraryList is given props from LibaryList reducer, aka the data
export default connect(mapStateToProps)(ItemList);

const styles = {
  sectionListStyle: {
    marginHorizontal: 5,
  },
  sectionHeaderStyle: {
    marginTop: 20,
    marginBottom: 3,
    padding: 10,
    paddingLeft: 10,
    backgroundColor: 'blue',
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 20,
  },
};
