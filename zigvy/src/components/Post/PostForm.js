import React from "react";
import { Form, Field } from "react-final-form";
import PropTypes from "prop-types";
import { Button, Divider } from "antd";

import PostModel from "./model";
import { EditableTagGroup, Input, TextArea } from "components/ReduxField";

const { titleF, tagsF, contentF } = PostModel;

function PostForm(props) {
  const { onSubmit, initialValues } = props;
  const _validate = values => {
    const errors = {};
    if (!values[titleF.name]) {
      errors[titleF.name] = "Required";
    }
    if (!values[tagsF.name]) {
      errors[tagsF.name] = "Required";
    }
    if (!values[contentF.name]) {
      errors[contentF.name] = "Required";
    }
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={_validate}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>{titleF.label}</label>
            <Field
              name={titleF.name}
              component={Input}
              placeholder={titleF.placeholder}
              autoFocus
            />
          </div>
          <div>
            <label>{tagsF.label}</label>
            <Field
              name={tagsF.name}
              component={EditableTagGroup}
              placeholder={tagsF.placeholder}
            />
          </div>
          <div>
            <label>{contentF.label}</label>
            <Field
              name={contentF.name}
              component={TextArea}
              placeholder={contentF.placeholder}
              rows={4}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 10
            }}
          >
            <Button type="primary" htmlType="submit" disabled={submitting}>
              Submit
            </Button>
            <Button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </Button>
          </div>
        </form>
      )}
    ></Form>
  );
}

PostForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};
PostForm.defaultProps = {
  initialValues: {},
  onSubmit: () => {
    alert("submit");
  }
};

export default PostForm;
