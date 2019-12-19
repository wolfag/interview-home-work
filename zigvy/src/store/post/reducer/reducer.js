import update from "immutability-helper";
import { handleActions } from "redux-actions";
import { at } from "lodash";

import * as Type from "../type";
import { initialState } from "../../comment/reducer/initialize";

const reducer = handleActions(
  new Map([
    [
      Type.ADD_POST,
      state => {
        return update(state, {
          add: {
            loading: { $set: true }
          }
        });
      }
    ],
    [
      Type.ADD_POST_FAIL,
      state => {
        return update(state, {
          add: {
            loading: { $set: false }
          }
        });
      }
    ],
    [
      Type.ADD_POST_SUCCESS,
      state => {
        return update(state, {
          add: {
            loading: { $set: false }
          }
        });
      }
    ],
    [
      Type.UPDATE_POST,
      state => {
        return update(state, {
          update: {
            loading: { $set: true }
          }
        });
      }
    ],
    [
      Type.UPDATE_POST_FAIL,
      state => {
        return update(state, {
          update: {
            loading: { $set: false }
          }
        });
      }
    ],
    [
      Type.UPDATE_POST_SUCCESS,
      state => {
        return update(state, {
          update: {
            loading: { $set: false }
          }
        });
      }
    ],
    [
      Type.DELETE_POST,
      state => {
        return update(state, {
          delete: {
            loading: { $set: true }
          }
        });
      }
    ],
    [
      Type.DELETE_POST_FAIL,
      state => {
        return update(state, {
          delete: {
            loading: { $set: false }
          }
        });
      }
    ],
    [
      Type.DELETE_POST_SUCCESS,
      state => {
        return update(state, {
          delete: {
            loading: { $set: false }
          }
        });
      }
    ],
    [
      Type.GET_LIST_POST_BY_AUTHOR,
      state => {
        return update(state, {
          listPost: {
            loading: { $set: true }
          }
        });
      }
    ],
    [
      Type.GET_LIST_POST_BY_AUTHOR_FAIL,
      state => {
        return update(state, {
          listPost: {
            loading: { $set: false }
          }
        });
      }
    ],
    [
      Type.GET_LIST_POST_BY_AUTHOR_SUCCESS,
      (state, action) => {
        const [data, offset, limit, total] = at(
          action,
          "payload.data.data",
          "payload.data.offset",
          "payload.data.limit",
          "payload.data.total"
        );
        return update(state, {
          listPost: {
            loading: { $set: false },
            list: { $set: data },
            offset: { $set: offset },
            limit: { $set: limit },
            total: { $set: total }
          }
        });
      }
    ]
  ]),
  initialState
);

export default reducer;
