import React from "react";
import { Input } from "antd";

function InputField(props) {
  const {
    input: { value, onChange },
    meta: { error, touched }
  } = props;
  return (
    <>
      <Input value={value} onChange={onChange} {...props} />
      {error && touched && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
}

export default InputField;
