import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Input} from 'antd';

const {TextArea} = Input;

function Editor (props) {
  const {onChange, onSubmit, submitting, value} = props;
  return (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
}

Editor.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  value: PropTypes.string,
};
Editor.defaultProps = {
  onSubmit: () => {
    alert ('onSubmit');
  },
  onChange: () => {
    alert ('onChange');
  },
  submitting: false,
  value: '',
};

export default Editor;
