import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

export const Input = props => (
  <View style={styles.inputGroup}>
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        underlineColorAndroid="rgba(0,0,0,0)"
        style={styles.input}
        placeholderTextColor="rgba(255,255,255,0.7)"
      />
      {props.errors[props.name] ? (
        <Text style={styles.inputTextError}>
          {props.errors[props.name].map((error, key) => (
            <Text key={key}>{error}</Text>
          ))}
        </Text>
      ) : null}
    </View>
  </View>
);

export const Btn = props => (
  <View style={styles.inputGroup}>
    <TouchableOpacity style={styles.btn} {...props}>
      <View>
        <Text style={styles.btnText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export const Tab = props => (
  <View style={styles.tabIcon}>
    <Icon name={props.icon} size={40} color="rgba(255,255,255,0.3)" />
  </View>
);

export const Alert = props => {
  const bgColor = props.error ? 'rgba(255,0,0,0.3)' : 'rgba(0, 255, 0, 0.3)';
  return (
    <View style={styles.errorContainer}>
      <View style={[styles.errorView, { backgroundColor: bgColor }]}>
        <Text style={styles.errorText}>{props.title}</Text>
        {props.onClose && (
          <TouchableOpacity onPress={() => props.onClose()}>
            <View style={styles.closeError}>
              <Icon name="close" color="#fff" size={14} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const FlexBtn = props => (
  <TouchableOpacity
    {...props}
    style={{
      backgroundColor: 'rgba(255,255,255,0.4)',
      padding: 8,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 8
    }}
  >
    <View>
      <Text style={{ color: '#fff' }}>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

Tab.propTypes = {
  icon: PropTypes.string
};

Input.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string
};

Input.defaultProps = {
  errors: {}
};

FlexBtn.propTypes = {
  title: PropTypes.string
};

Btn.propTypes = {
  title: PropTypes.string
};

Alert.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  error: PropTypes.bool
};
