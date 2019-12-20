import { all, call, put, take, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import * as AuthType from "./type";
import * as AuthAction from "./action";
import { authService } from "services";
import { history } from "store";

function* login() {
  while (1) {
    const action = yield take(AuthType.LOGIN);
    try {
      const response = yield call(authService.login, action.payload);
      yield put(AuthAction.loginSuccessAction(response));
      history.push("/blogs");
    } catch (error) {
      yield put(AuthAction.loginFailAction(error));
      notification.error({
        message: "Nope!!!",
        description: error.message
      });
    }
  }
}

export default function* rootSaga() {
  yield all([login()]);
}
