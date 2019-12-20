import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { Form, Field } from "react-final-form";

import { Input } from "components/ReduxField";
import LoginModel from "./model";
import styles from "./styles.module.css";

const { usernameF, passwordF } = LoginModel;

function LoginForm(props) {
  const { onSubmit, submitting } = props;
  const _validate = values => {
    const errors = {};
    if (!values[usernameF.name]) {
      errors[usernameF.name] = "Required";
    }
    if (!values[passwordF.name]) {
      errors[passwordF.name] = "Required";
    }
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={_validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.login}>
          <h3>Login</h3>
          <div>
            <Field
              name={usernameF.name}
              component={Input}
              placeholder={usernameF.placeholder}
            />
            <Field
              name={passwordF.name}
              component={Input}
              placeholder={passwordF.placeholder}
            />
          </div>
          <div
            style={{
              marginTop: 10
            }}
          >
            <Button type="primary" htmlType="submit" disabled={submitting}>
              Login
            </Button>
          </div>
        </form>
      )}
    ></Form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
LoginForm.defaultProps = {
  onSubmit: () => {
    alert("login");
  }
};

export default LoginForm;
