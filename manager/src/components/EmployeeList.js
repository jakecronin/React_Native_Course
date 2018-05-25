import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { Spinner } from './common';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderLoader() {
    if (this.props.loading) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner size={'large'} />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.renderLoader()}
        <FlatList
          enableEmptySections
          data={this.props.employees}
          renderItem={({ item }) => <EmployeeListItem employee={item} />}
          keyExtractor={(item) => (item ? item.uid : 'noID')}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 0,
  }
};

const mapStateToProps = (state) => {
  const loading = state.employees.loading;
  delete state.employees.loading;
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  }); //build array with all objects, adding key as part of object
  return { employees, loading };
};

export default connect(mapStateToProps,
   { employeesFetch })(EmployeeList);
