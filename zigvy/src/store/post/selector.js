import { createSelector } from "reselect";
import { get, at } from "lodash";

export const getListPost = createSelector(
  state => state.post.listPost.list,
  list => list || []
);

export const getListPostLoadingStatus = state => state.post.listPost.loading;

export const getPostPaging = createSelector(
  state => state.post.listPost.offset,
  state => state.post.listPost.total,
  state => state.post.listPost.limit,
  (offset, total, limit) => ({
    current: limit !== 0 ? Math.round(offset / limit) + 1 : 1,
    pageSize: limit,
    total,
    offset
  })
);

export const getAddPostLoadingStatus = state => state.post.add.loading;

export const getDeletePostLoadingStatus = state => state.post.delete.loading;

export const getUpdatePostLoadingStatus = state => state.post.update.loading;
