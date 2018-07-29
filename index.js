import { AppRegistry } from 'react-native';
import App from './src/App';
import { YellowBox } from 'react-native';
/**
 * Disable deprecated method Warning message(isMounted from react-navigation)
 */
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

AppRegistry.registerComponent('DoorLock', () => App);
