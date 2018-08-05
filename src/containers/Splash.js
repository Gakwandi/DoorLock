import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkToken } from '../actions/AuthActions';
import styles from '../styles';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.checkToken();
    }, 200);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, color: 'rgba(255,255,255,0.6)' }}>
          Smart Lock
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  checkToken: dispatch(checkToken())
});
Splash.propTypes = {
  checkToken: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
