import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { List, Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import Comment from "./Comment";
import ReplyEditor from "components/ReplyEditor";
import * as CommentAction from "store/comment/action";
import * as CommentSelector from "store/comment/selector";
import * as AuthSelector from "store/auth/selector";
import Constant from "common/constant";

const { Panel } = Collapse;

function CommentList(props) {
  const { postId } = props;
  const dispatch = useDispatch();

  const comments = useSelector(CommentSelector.getListComment(postId));
  const userAuth = useSelector(AuthSelector.getAuthInfo);
  const ownerId = get(userAuth, "id");

  useEffect(() => {
    dispatch(CommentAction.getListCommentByPostAction({ postId }));
  }, [postId]);

  return (
    <Collapse bordered={false}>
      <Panel header={`${comments.length} replies`} showArrow={false}>
        <List
          header={<ReplyEditor postId={postId} ownerId={ownerId} />}
          dataSource={comments}
          split={false}
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: Constant.commentSize
          }}
          renderItem={comment => {
            return (
              <List.Item key={comment.id}>
                <Comment {...comment} userId={ownerId} />
              </List.Item>
            );
          }}
        />
      </Panel>
    </Collapse>
  );
}

CommentList.propTypes = {
  postId: PropTypes.number.isRequired
};

CommentList.defaultProps = {};

export default CommentList;
