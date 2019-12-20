import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import { Spin } from "antd";

import store, { history, persistor } from "./store";
import Blog from "components/Blog";
import Routing from "components/Routing";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spin spinning={true} />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Routing />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
