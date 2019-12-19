import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import {Modal} from 'antd';

import rootReducer from './reducer';
import rootSaga from './saga';

export const create = () => {
  const history = createBrowserHistory ({
    getUserConfirmation (message, callback) {
      Modal.confirm ({
        title: message,
        content: '',
        onOk () {
          callback (true);
        },
        onCancel () {
          callback (false);
        },
      });
    },
  });

  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware ();
  const middleware = [sagaMiddleware, routerMiddleware (history)];
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push (devToolsExtension ());
    }
  }
  const initialState = {};

  const composedEnhancers = compose (
    applyMiddleware (...middleware),
    ...enhancers
  );
  const store = createStore (
    rootReducer (history),
    initialState,
    composedEnhancers
  );
  const persistor = persistStore (store);
  sagaMiddleware.run (rootSaga);
  return [history, store, persistor];
};

const [history, store, persistor] = create ();

export {history, persistor};
export default store;
