import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { register, dismissRegisterMessage } from '../actions/AuthActions';
import styles from '../styles';
import { Input, Btn, Alert } from '../components';

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: '',
    email: '',
    password: ''
  };
  _register = data =>
    this.props.register(this.state).then(resp => {
      if (resp) {
        this.setState({ username: '', email: '', password: '' });
      }
    });
  componentWillUnmount() {
    this.props.dismissMessage();
  }
  render() {
    const { reg, dismissMessage } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.logoText}>Door Lock</Text>
            {reg.message ? (
              <Alert
                title={reg.message}
                onClose={() => dismissMessage()}
                error={reg.error}
              />
            ) : null}
            <Input
              placeholder="Username ..."
              onChangeText={username => this.setState({ username })}
              name="username"
              value={this.state.username}
              errors={reg.errors}
            />
            <Input
              placeholder="Email ..."
              onChangeText={email => this.setState({ email })}
              name="email"
              value={this.state.email}
              errors={reg.errors}
            />
            <Input
              placeholder="Password ..."
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
              name="password"
              value={this.state.password}
              errors={reg.errors}
            />
            <Btn title="Signup" onPress={this._register} />
            <View style={styles.footer}>
              <View>
                <Text style={styles.footerText}>
                  {' '}
                  {"Don't have an account yet?"}
                </Text>
              </View>
              <TouchableOpacity onPress={() => Actions.login()}>
                <View>
                  <Text style={styles.footerTextBold}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  reg: state.reg
});
const mapDispatchToProps = dispatch => ({
  register: data => dispatch(register(data)),
  dismissMessage: () => dispatch(dismissRegisterMessage())
});
Signup.propTypes = {
  register: PropTypes.func,
  dismissMessage: PropTypes.func,
  reg: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
