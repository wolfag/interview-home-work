import update from "immutability-helper";
import { handleActions } from "redux-actions";
import { get } from "lodash";
import moment from "moment";

import { setToken, removeToken } from "services/axios";
import { setAuth } from "services/localStorage";
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
        // const token = get(action.payload, "token"); //for real server
        const token = moment().unix();
        setToken(token);
        setAuth(action.payload);
        return update(state, {
          loading: { $set: true },
          authInfo: { $set: action.payload },
          token: { $set: token }
        });
      }
    ],
    [
      Type.LOGOUT,
      state => {
        setAuth(null);
        removeToken();
        return update(state, {
          loading: { $set: true },
          authInfo: { $set: null },
          token: { $set: null }
        });
      }
    ]
  ]),
  initialState
);

export default reducer;
