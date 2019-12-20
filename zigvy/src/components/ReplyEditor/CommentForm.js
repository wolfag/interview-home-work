import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import {Form, Field} from 'react-final-form';

import CommentModel from './model';
import {TextArea} from 'components/ReduxField';

const {contentF} = CommentModel;

function CommentForm (props) {
  const {onSubmit, submitting} = props;

  const _validate = values => {
    const errors = {};
    if (!values[contentF.name]) {
      errors[contentF.name] = 'Required';
    }
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={_validate}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name={contentF.name}
              component={TextArea}
              placeholder={contentF.placeholder}
              rows={4}
            />
          </div>
          <div
            style={{
              marginTop: 10,
            }}
          >
            <Button type="primary" htmlType="submit" disabled={submitting}>
              Add Comment
            </Button>
          </div>
        </form>
      )}
    />
  );
}

CommentForm.propTypes = {
  onSubmit: PropTypes.func,
};
CommentForm.defaultProps = {
  onSubmit: () => {
    alert ('onSubmit');
  },
};

export default CommentForm;
