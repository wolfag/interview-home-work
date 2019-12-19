import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {createBlacklistFilter} from 'redux-persist-transform-filter';

export default history => {
  const reducers = combineReducers ({
    router: connectRouter (history),
  });

  const persistConfig = {
    key: 'root',
    storage: storageSession,
    stateReconciler: autoMergeLevel2,
    blacklist: 'router',
  };

  return persistReducer (persistConfig, reducers);
};
