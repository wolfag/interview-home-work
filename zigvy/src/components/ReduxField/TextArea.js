import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

function TextAreaField(props) {
  const {
    input: { value, onChange },
    meta: { error, touched }
  } = props;
  return (
    <>
      <TextArea value={value} onChange={onChange} {...props} />
      {error && touched && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
}

export default TextAreaField;
