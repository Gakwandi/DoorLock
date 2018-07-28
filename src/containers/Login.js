import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import { Input, Btn } from '../components';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 100, height: 100 }}
            />
            <Input placeholder="Username ..." />
            <Input placeholder="Email ..." />
            <Input placeholder="Password ..." />
            <Btn title="Signup" onPress={()=>alert('Ok')}/>
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
