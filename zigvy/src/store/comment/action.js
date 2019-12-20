import {createAction} from 'redux-actions';

import * as Type from './type';

export const addCommentAction = createAction (Type.ADD_COMMENT);
export const addCommentSuccessAction = createAction (Type.ADD_COMMENT_SUCCESS);
export const addCommentFailAction = createAction (Type.ADD_COMMENT_FAIL);

export const updateCommentAction = createAction (Type.UPDATE_COMMENT);
export const updateCommentSuccessAction = createAction (
  Type.UPDATE_COMMENT_SUCCESS
);
export const updateCommentFailAction = createAction (Type.UPDATE_COMMENT_FAIL);

export const deleteCommentAction = createAction (Type.DELETE_COMMENT);
export const deleteCommentSuccessAction = createAction (
  Type.DELETE_COMMENT_SUCCESS
);
export const deleteCommentFailAction = createAction (Type.DELETE_COMMENT_FAIL);

export const getListCommentByPostAction = createAction (
  Type.GET_LIST_COMMENT_BY_POST
);
export const getListCommentByPostSuccessAction = createAction (
  Type.GET_LIST_COMMENT_BY_POST_SUCCESS
);
export const getListCommentByPostFailAction = createAction (
  Type.GET_LIST_COMMENT_BY_POST_FAIL
);

//FAKE
export const fakeAddCommentAction = createAction (Type.FAKE_ADD_COMMENT);
export const fakeUpdateCommentAction = createAction (Type.FAKE_UPDATE_COMMENT);
export const fakeDeleteCommentAction = createAction (Type.FAKE_DELETE_COMMENT);
