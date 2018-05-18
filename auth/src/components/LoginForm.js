import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onLoginPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }
  onLoginSuccess() {
    this.setState({ error: '', email: '', password: '', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button
        text={'Log in'}
        onPress={this.onLoginPress.bind(this)}
      />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'knifelifeapp@gmail.com'}
            label={'Username'}
            value={this.state.email}
            onChangeText={email => this.setState({ email, error: null })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Input
            placeholder={'password'}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password, error: null })}
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};
