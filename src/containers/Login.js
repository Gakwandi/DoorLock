import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { login, dismissLoginMessage } from '../actions/AuthActions';
import styles from '../styles';
import { Input, Btn, Alert } from '../components';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: '',
    password: ''
  };
  _login = data => this.props.login(this.state);
  componentWillUnmount() {
    this.props.dismissMessage();
  }
  render() {
    const { auth, dismissMessage } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" translucent={true} />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.logoText}>Door Lock</Text>
            {auth.message ? (
              <Alert
                title={auth.message}
                onClose={() => dismissMessage()}
                error={auth.error}
              />
            ) : null}
            <Input
              placeholder="Email ..."
              onChangeText={email => this.setState({ email })}
              name="email"
              errors={auth.errors}
            />
            <Input
              placeholder="Password ..."
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
              name="password"
              errors={auth.errors}
            />
            <Btn title="Login" onPress={this._login} disabled={auth.loading} />
            <View style={styles.footer}>
              <View>
                <Text style={styles.footerText}> Already have an account?</Text>
              </View>
              <TouchableOpacity onPress={() => Actions.signup()}>
                <View>
                  <Text style={styles.footerTextBold}>Sign up</Text>
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
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
  dismissMessage: () => dispatch(dismissLoginMessage())
});

Login.propTypes = {
  login: PropTypes.func,
  dismissMessage: PropTypes.func,
  auth: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
