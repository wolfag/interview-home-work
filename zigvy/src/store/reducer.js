import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import commentReducer from "store/comment/reducer";
import postReducer from "store/post/reducer";
import authReducer from "store/auth/reducer";

export default history => {
  const reducers = combineReducers({
    router: connectRouter(history),
    comment: commentReducer,
    post: postReducer,
    auth: authReducer
  });

  const persistConfig = {
    key: "root",
    storage: storageSession,
    stateReconciler: autoMergeLevel2,
    blacklist: "router"
  };

  return persistReducer(persistConfig, reducers);
};
