import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ConnectedRouter} from 'connected-react-router';

import store, {history, persistor} from './store';

import {Spin} from 'antd';

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spin spinning={true} />} persistor={persistor}>
        <ConnectedRouter history={history}>

          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>

          </div>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
