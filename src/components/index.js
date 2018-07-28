import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

export const Input = props => (
  <View style={styles.inputContainer}>
    <TextInput
      {...props}
      underlineColorAndroid="rgba(0,0,0,0)"
      style={styles.input}
      placeholderTextColor="rgba(255,255,255,0.7)"
    />
  </View>
);

export const Btn = props => (
  <View style={styles.inputContainer}>
    <TouchableOpacity onPress={() => props.onPress()} style={styles.btn}>
      <View>
        <Text style={styles.btnText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

Btn.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};
