import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from '../styles';
import { Input, Btn } from '../components';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" translucent={true}/>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.logoText}>Door Lock</Text>
            <Input placeholder="Email ..." />
            <Input placeholder="Password ..." />
            <Btn title="Login" onPress={() => alert('Ok')} />
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
