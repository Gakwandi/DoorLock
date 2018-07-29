import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" translucent={true} />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.logoText}>Door Lock{'\n \n\n'}</Text>
            <TouchableOpacity
              onPress={() => alert('OFF/ON button')}
              style={styles.powerBtn}
            >
              <View>
                <Icon name="md-power" size={80} color="#fff" />
              </View>
            </TouchableOpacity>
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
)(Settings);
