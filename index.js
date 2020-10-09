
import React from 'react';
import Home from './src/Home/Home.screen'
import { Provider } from 'react-redux';
import { Navigation } from "react-native-navigation";
import configureStore from './src/Store/';

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
              name: 'com.myApp.HomeScreen',
            }
          }
        ]
      }
    }
  });
});