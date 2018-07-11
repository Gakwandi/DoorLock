import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class Logo extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.img}
            source={require('../images/icon.png')}/>
          <Text style={styles.logoText}>Door Lock</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    fontSize:18,
    color: 'rgba(255,255,255,0.7)'
  },
  img: {
    width: 100,
    height: 100
  }
});