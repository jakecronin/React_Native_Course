import React from 'react';
import { connect } from 'react-redux';
import { employeeCreate, employeeFormClear } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component {
  componentWillMount() {
    //clear component before it appears
    this.props.employeeFormClear();
  }

  onCreatePress() {
    //call firebase to save parts of mapStateToPros
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }


  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button
            text="Create"
            onPress={this.onCreatePress.bind(this)}
          />
        </CardSection>

      </Card>
  );
  }

}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate, employeeFormClear })(EmployeeCreate);
