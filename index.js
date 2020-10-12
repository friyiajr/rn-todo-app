
import React from 'react';

import { Provider } from 'react-redux';
import { Navigation } from "react-native-navigation";
import configureStore from './src/Store/';

import Home from './src/Screens/Home/Home.screen'
import CreateTodoScreen from './src/Screens/CreateTodo/CreateTodo.screen';
import LoginScreen from './src/Screens/Login/Login.screen';

const store = configureStore();

Navigation.registerComponent(
  'com.myApp.HomeScreen',
  () => props => (
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  ),
  () => Home
);

Navigation.registerComponent(
  'com.myApp.CreateTodoScreen',
  () => props => (
    <Provider store={store}>
      <CreateTodoScreen {...props} />
    </Provider>
  ),
  () => CreateTodoScreen,
)

Navigation.registerComponent(
  'com.myApp.LoginScreen',
  () => props => (
    <Provider store={store}>
      <LoginScreen {...props} />
    </Provider>
  ),
  () => LoginScreen,
)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false,
          }
        },
        children: [
          {
            component: {
              name: 'com.myApp.LoginScreen',
            }
          }
        ]
      }
    }
  });
});