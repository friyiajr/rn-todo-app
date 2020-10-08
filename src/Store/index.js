import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import { reducers } from '../Modules/'

export default initialState => {
    let middleware = [];
    let composeEnhancers = compose;
    const windowObj = this.window || {};

    if (__DEV__) {
        composeEnhancers =
            windowObj.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        middleware = middleware.concat(logger);
    }

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(...middleware)),
    );

    return store;
}