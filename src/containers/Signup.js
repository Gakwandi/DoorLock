import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from '../styles';
import { Input, Btn } from '../components';

class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.logoText}>Door Lock</Text>
            <Input placeholder="Username ..." />
            <Input placeholder="Email ..." />
            <Input placeholder="Password ..." />
            <Btn title="Signup" onPress={() => alert('Ok')} />
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
