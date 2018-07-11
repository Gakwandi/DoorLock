import React, { Component } from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {Router, Stack, Scene} from 'react-native-router-flux';


import Login from './pages/Login';
import Signup from './pages/Signup';

export default class Routes extends Component<{}> {
  render() {
    return (
    	 <Router>
          <Stack hideNavBar={true} key="root">
            <Scene key="login" component={Login} title="Login" initial/>
            <Scene key="signup" component={Signup} title="Register" initial={false}/>
          </Stack>
        </Router>
    );
  }
}