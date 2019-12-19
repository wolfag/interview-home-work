import React from "react";
import { Modal, Typography } from "antd";

import PostForm from "./PostForm";

const { Title } = Typography;

function PostFormModal(props) {
  const { visible, onCancel } = props;
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      destroyOnClose={true}
      title={
        <center>
          <Title level={3}>New Post</Title>
        </center>
      }
    >
      <PostForm {...props} />
    </Modal>
  );
}

export default PostFormModal;
