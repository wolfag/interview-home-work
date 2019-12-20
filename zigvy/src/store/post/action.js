import {createAction} from 'redux-actions';

import * as Type from './type';

export const addPostAction = createAction (Type.ADD_POST);
export const addPostSuccessAction = createAction (Type.ADD_POST_SUCCESS);
export const addPostFailAction = createAction (Type.ADD_POST_FAIL);

export const updatePostAction = createAction (Type.UPDATE_POST);
export const updatePostSuccessAction = createAction (Type.UPDATE_POST_SUCCESS);
export const updatePostFailAction = createAction (Type.UPDATE_POST_FAIL);

export const deletePostAction = createAction (Type.DELETE_POST);
export const deletePostSuccessAction = createAction (Type.DELETE_POST_SUCCESS);
export const deletePostFailAction = createAction (Type.DELETE_POST_FAIL);

export const getListPostByAuthorAction = createAction (
  Type.GET_LIST_POST_BY_AUTHOR
);
export const getListPostByAuthorSuccessAction = createAction (
  Type.GET_LIST_POST_BY_AUTHOR_SUCCESS
);
export const getListPostByAuthorFailAction = createAction (
  Type.GET_LIST_POST_BY_AUTHOR_FAIL
);

//FAKE
export const fakeAddPostAction = createAction (Type.FAKE_ADD_POST);
export const fakeUpdatePostAction = createAction (Type.FAKE_UPDATE_POST);
export const fakeDeletePostAction = createAction (Type.FAKE_DELETE_POST);
