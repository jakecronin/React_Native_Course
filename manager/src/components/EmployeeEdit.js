import _ from 'lodash';
import React from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
  state = { showModal: false };
  componentWillMount() {
    _.forEach(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress() {
    //call actoin for
    const { name, shift, phone } = this.props;
    const { uid } = this.props.employee;
    this.props.employeeSave({ name, shift, phone, uid });
  }

  onSendTextPressed() {
    const { phone, shift } = this.props;
    const message = `You are scheduled to work on ${shift}.`;
    Communications.text(phone, message);
  }

  onDeleteUser() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDeclineDeletion() {
    this.setState({ showModal: false });
  }

  render() {
    return (
        <Card>
          <EmployeeForm {...this.props} />

          <CardSection>
            <Button text={'Save'} onPress={this.onSavePress.bind(this)} />
          </CardSection>

          <CardSection>
            <Button
              text={'Text Schedule'}
              onPress={this.onSendTextPressed.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Button
              text={'Fire Employee'}
              onPress={() => this.setState({ showModal: !this.state.showModal })}
            />
          </CardSection>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onDeleteUser.bind(this)}
            onDecline={this.onDeclineDeletion.bind(this)}
          >
            Are you sure?
          </Confirm>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
