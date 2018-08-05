import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Scene, Modal, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Splash from './containers/Splash';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Notifications from './containers/Notifications';
import Lock from './containers/Lock';
import Settings from './containers/Settings';
import store from './store/ConfigureStore';
import { Tab } from './components';
import styles from './styles';

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
              key="signup"
              component={Signup}
              title="Login"
              hideNavBar={true}
            />
            <Tabs
              key="account"
              tabBarPosition="bottom"
              tabStyle={styles.tabStyle}
              tabBarStyle={styles.tabBarStyle}
              showLabel={false}
              activeBackgroundColor="rgba(70, 90, 100, 0.89)"
              inactiveBackgroundColor="#465a64"
            >
              <Scene
                key="lock"
                component={Lock}
                title="Lock"
                hideNavBar={true}
                icon={() => <Tab icon="key" />}
              />
              <Scene
                key="notifications"
                component={Notifications}
                title="Notifications"
                hideNavBar={true}
                icon={() => <Tab icon="bell" />}
              />
              <Scene
                key="settings"
                component={Settings}
                title="Settings"
                hideNavBar={true}
                icon={() => <Tab icon="gear" />}
              />
            </Tabs>
          </Modal>
        </RouterWithRedux>
      </Provider>
    );
  }
}
