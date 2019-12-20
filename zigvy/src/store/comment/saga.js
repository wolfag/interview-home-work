import { all, call, put, take, takeEvery } from "redux-saga/effects";
import { notification } from "antd";
import moment from "moment";

import * as CommentType from "./type";
import * as CommentAction from "./action";
import { commentService } from "services";

function* addComment() {
  while (1) {
    const action = yield take(CommentType.ADD_COMMENT);
    try {
      const response = yield call(commentService.createComment, action.payload);

      yield put(CommentAction.addCommentSuccessAction(response));
      yield put(
        CommentAction.fakeAddCommentAction({
          ...action.payload.data,
          id: Math.random(),
          created_at: moment()
        })
      );
    } catch (error) {
      yield put(CommentAction.addCommentFailAction(error));
      notification.error({
        message: "Add comment fail",
        description: error.message
      });
    }
  }
}

function* updateComment() {
  while (1) {
    const action = yield take(CommentType.UPDATE_COMMENT);
    try {
      const response = yield call(commentService.updateComment, action.payload);

      yield put(CommentAction.updateCommentSuccessAction(response));
      yield put(CommentAction.fakeUpdateCommentAction(action.payload.data));
    } catch (error) {
      yield put(CommentAction.updateCommentFailAction(error));
      notification.error({
        message: "Update comment fail",
        description: error.message
      });
    }
  }
}

function* deleteComment() {
  while (1) {
    const action = yield take(CommentType.DELETE_COMMENT);
    try {
      const response = yield call(commentService.deleteComment, action.payload);

      yield put(CommentAction.deleteCommentSuccessAction(response));
      yield put(CommentAction.fakeDeleteCommentAction(action.payload.data));
    } catch (error) {
      yield put(CommentAction.deleteCommentFailAction(error));
      notification.error({
        message: "Delete comment fail",
        description: error.message
      });
    }
  }
}

function* getListCommentByPost() {
  yield takeEvery(CommentType.GET_LIST_COMMENT_BY_POST, fetchCommentByPost);
}

function* fetchCommentByPost(action) {
  const { payload } = action;
  try {
    const response = yield call(commentService.getListCommentByPost, payload);

    yield put(
      CommentAction.getListCommentByPostSuccessAction({
        origin: payload,
        data: response
      })
    );
  } catch (error) {
    yield put(
      CommentAction.getListCommentByPostFailAction({ origin: payload, error })
    );
    notification.error({
      message: "Can not load comments",
      description: error.message
    });
  }
}

export default function* rootSaga() {
  yield all([
    addComment(),
    updateComment(),
    deleteComment(),
    getListCommentByPost()
  ]);
}
