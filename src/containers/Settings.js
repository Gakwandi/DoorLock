import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { logout } from '../actions/AuthActions';
import { FlexBtn } from '../components';
import styles from '../styles';

class Settings extends Component {
  render() {
    const { auth } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" translucent={true} />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <View>
              <Icon name="md-person" size={80} color="#fff" />
            </View>
            <Text style={{ color: '#fff' }}>{auth.user.username}</Text>
            <Text style={{ color: '#fff' }}>
              {auth.user.email}
              {'\n\n'}
            </Text>
            <FlexBtn title="Logout" onPress={() => this.props.logout()} />
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
  logout: () => dispatch(logout())
});

Settings.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
