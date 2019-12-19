import { all } from "redux-saga/effects";

import commentSaga from "store/comment/saga";
import postSaga from "store/post/saga";

export default function* rootSaga() {
  yield all([commentSaga(), postSaga()]);
}
