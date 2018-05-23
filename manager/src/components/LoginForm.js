import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
//^available functions as passed to props by connect

class LoginForm extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPressed() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      console.log('got an error for render error');
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
          {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderLoginButton() {
    if (this.props.loading) {
      return (
        <CardSection>
          <Spinner size={'large'} />
        </CardSection>
      );
    }

    return (
      <CardSection>
        <Button
          text="Sign Up / Login"
          onPress={this.onLoginPressed.bind(this)}
        />
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="knifelifeapp@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        {this.renderLoginButton()}

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  },
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser,
  })(LoginForm);
