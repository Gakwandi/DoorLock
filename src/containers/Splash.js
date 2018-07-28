import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from '../styles';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.login();
    }, 10);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, color: 'rgba(255,255,255,0.6)'}}>Smart Lock</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
