import {createSelector} from 'reselect';
import {get, at} from 'lodash';

export const getListComment = postId =>
  createSelector (
    state => state.comment.commentByPost,
    list => {
      return get (list, `[${postId}].data`) || [];
    }
  );

export const getAddCommentLoadingStatus = state => state.comment.add.loading;

export const getDeleteCommentLoadingStatus = state =>
  state.comment.delete.loading;

export const getUpdateCommentLoadingStatus = state =>
  state.comment.update.loading;
