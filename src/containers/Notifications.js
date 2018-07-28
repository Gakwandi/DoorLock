import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';

class Notifications extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
