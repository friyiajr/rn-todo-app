import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import logger from 'redux-logger';
import { reducers, rootSaga } from '../Modules/';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default initialState => {
  let middleware = [sagaMiddleware];
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

  sagaMiddleware.run(rootSaga);

  return store;
}