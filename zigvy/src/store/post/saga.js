import {all, call, put, take} from 'redux-saga/effects';
import {notification} from 'antd';

import * as PostType from './type';
import * as PostAction from './action';
import {postService} from 'services';

function* addPost () {
  while (1) {
    const action = yield take (PostType.ADD_POST);
    try {
      const response = yield call (postService.createPost, action.payload);

      yield put (PostAction.addPostSuccessAction (response));
      yield put (
        PostAction.fakeAddPostAction ({
          ...action.payload.data,
          id: Math.random (),
        })
      );
    } catch (error) {
      yield put (PostAction.addPostFailAction (error));
      notification.error ({
        message: 'Can not post for now',
        description: error.message,
      });
    }
  }
}

function* updatePost () {
  while (1) {
    const action = yield take (PostType.UPDATE_POST);
    try {
      const response = yield call (postService.updatePost, action.payload);

      yield put (PostAction.updatePostAction (response));
      yield put (PostAction.fakeUpdatePostAction (action.payload.data));
    } catch (error) {
      yield put (PostAction.updatePostFailAction (error));
      notification.error ({
        message: 'Can not update post for now',
        description: error.message,
      });
    }
  }
}
function* deletePost () {
  while (1) {
    const action = yield take (PostType.DELETE_POST);
    try {
      const response = yield call (postService.deletePost, action.payload);

      yield put (PostAction.deletePostSuccessAction (response));
      yield put (PostAction.fakeDeletePostAction (action.payload.postId));
    } catch (error) {
      yield put (PostAction.deletePostFailAction (error));
      notification.error ({
        message: 'Can not delete post for now',
        description: error.message,
      });
    }
  }
}
function* getListPostByAuthor () {
  while (1) {
    const action = yield take (PostType.GET_LIST_POST_BY_AUTHOR);
    try {
      const response = yield call (
        postService.getListPostByAuthor,
        action.payload
      );
      yield put (
        PostAction.getListPostByAuthorSuccessAction ({
          data: response,
        })
      );
    } catch (error) {
      yield put (PostAction.getListPostByAuthorFailAction (error));
      notification.error ({
        message: 'Can not get list post for now',
        description: error.message,
      });
    }
  }
}
function* getListPost () {
  while (1) {
    const action = yield take (PostType.GET_LIST_POST);
    try {
      const response = yield call (postService.getListPost, action.payload);
      yield put (
        PostAction.getListPostSuccessAction ({
          data: response,
        })
      );
    } catch (error) {
      yield put (PostAction.getListPostFailAction (error));
      notification.error ({
        message: 'Can not get list post for now',
        description: error.message,
      });
    }
  }
}

export default function* rootSaga () {
  yield all ([
    addPost (),
    updatePost (),
    deletePost (),
    getListPostByAuthor (),
    getListPost (),
  ]);
}
