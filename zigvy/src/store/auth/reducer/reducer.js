import update from "immutability-helper";
import { handleActions } from "redux-actions";

import * as Type from "../type";
import { initialState } from "./initialize";

const reducer = handleActions(
  new Map([
    [
      Type.LOGIN,
      state => {
        return update(state, {
          loading: { $set: true }
        });
      }
    ],
    [
      Type.LOGIN_FAIL,
      state => {
        return update(state, {
          loading: { $set: false }
        });
      }
    ],
    [
      Type.LOGIN_SUCCESS,
      (state, action) => {
        return update(state, {
          loading: { $set: true },
          authInfo: { $set: action.payload }
        });
      }
    ],
    [
      Type.LOGOUT,
      state => {
        return update(state, {
          loading: true
        });
      }
    ],
    [
      Type.LOGOUT_SUCCESS,
      state => {
        return update(state, {
          loading: { $set: false }
        });
      }
    ]
  ]),
  initialState
);

export default reducer;
