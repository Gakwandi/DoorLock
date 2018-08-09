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
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import { getLockState, lockUnlock } from '../actions/LockActions';
class Lock extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getLockState();
  }
  render() {
    const { lock, lockUnlock } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" translucent={true} />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.logoText}>
              Door Lock
              {'\n \n\n'}
            </Text>
            <TouchableOpacity
              onPress={() => lockUnlock()}
              style={styles.powerBtn}
            >
              <View>
                <Icon
                  name={lock.status === 'closed' ? 'md-lock' : 'md-unlock'}
                  size={80}
                  color="#fff"
                />
              </View>
            </TouchableOpacity>
            {lock.loading ? (
              <Text style={styles.white}>{lock.message}</Text>
            ) : (
              <Text style={styles.white}>{lock.status}</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  lock: state.lock
});
const mapDispatchToProps = dispatch => ({
  getLockState: () => dispatch(getLockState()),
  lockUnlock: () => dispatch(lockUnlock())
});

Lock.propTypes = {
  getLockState: PropTypes.func,
  lockUnlock: PropTypes.func,
  lock: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lock);
