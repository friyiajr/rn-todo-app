
import React from 'react';

import { AppRegistry } from 'react-native';
import Home from './src/Home/Home.screen'
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/Store/';

const store = configureStore();

AppRegistry.registerComponent(appName, () => {
    return () => {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }



});
