import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Scene, Modal, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Splash from './containers/Splash';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Notifications from './containers/Notifications';
import Settings from './containers/Settings';
import store from './store/ConfigureStore';

const RouterWithRedux = connect()(Router);

/**
 * Routes component
 */
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Modal key="root" hideNavBar>
            <Scene
              key="splash"
              component={Splash}
              title="Hello"
              hideNavBar={true}
            />
            <Scene
              key="login"
              component={Login}
              title="Login"
              hideNavBar={true}
            />
            <Scene
              key="login"
              component={Signup}
              title="Login"
              hideNavBar={true}
            />
            <Tabs key="account">
              <Scene
                key="settings"
                component={Settings}
                title="Settings"
                hideNavBar={true}
              />
              <Scene
                key="notifications"
                component={Notifications}
                title="Notifications"
                hideNavBar={true}
              />
            </Tabs>
          </Modal>
        </RouterWithRedux>
      </Provider>
    );
  }
}
