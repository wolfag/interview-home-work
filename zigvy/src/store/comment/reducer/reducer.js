import update from 'immutability-helper';
import {handleActions} from 'redux-actions';
import {get} from 'lodash';

import * as Type from '../type';
import {initialState} from './initialize';

const reducer = handleActions (
  new Map ([
    [
      Type.ADD_COMMENT,
      state => {
        return update (state, {
          add: {
            loading: {$set: true},
          },
        });
      },
    ],
    [
      Type.ADD_COMMENT_FAIL,
      state => {
        return update (state, {
          add: {
            loading: {$set: false},
          },
        });
      },
    ],
    [
      Type.ADD_COMMENT_SUCCESS,
      state => {
        return update (state, {
          add: {
            loading: {$set: false},
          },
        });
      },
    ],
    [
      Type.UPDATE_COMMENT,
      state => {
        return update (state, {
          update: {loading: {$set: true}},
        });
      },
    ],
    [
      Type.UPDATE_COMMENT_FAIL,
      state => {
        return update (state, {
          update: {loading: {$set: false}},
        });
      },
    ],
    [
      Type.UPDATE_COMMENT_SUCCESS,
      state => {
        return update (state, {
          update: {loading: {$set: false}},
        });
      },
    ],
    [
      Type.DELETE_COMMENT,
      state => {
        return update (state, {
          delete: {loading: {$set: true}},
        });
      },
    ],
    [
      Type.DELETE_COMMENT_FAIL,
      state => {
        return update (state, {
          delete: {loading: {$set: false}},
        });
      },
    ],
    [
      Type.DELETE_COMMENT_SUCCESS,
      state => {
        return update (state, {
          delete: {loading: {$set: false}},
        });
      },
    ],
    [
      Type.GET_LIST_COMMENT_BY_POST,
      (state, action) => {
        return update (state, {
          commentByPost: {
            $merge: {[action.payload.postId]: {loading: true, data: []}},
          },
        });
      },
    ],
    [
      Type.GET_LIST_COMMENT_BY_POST_FAIL,
      (state, action) => {
        return update (state, {
          commentByPost: {
            $merge: {[action.payload.origin.postId]: {loading: false}},
          },
        });
      },
    ],
    [
      Type.GET_LIST_COMMENT_BY_POST_SUCCESS,
      (state, action) => {
        return update (state, {
          commentByPost: {
            $merge: {
              [action.payload.origin.postId]: {
                loading: false,
                data: action.payload.data,
              },
            },
          },
        });
      },
    ],
    [
      Type.FAKE_ADD_COMMENT,
      (state, action) => {
        const item = action.payload;
        const postId = get (item, 'post');
        if (postId) {
          return update (state, {
            commentByPost: {
              [postId]: {
                data: {
                  $unshift: [item],
                },
              },
            },
          });
        } else {
          return state;
        }
      },
    ],
  ]),
  initialState
);

export default reducer;
