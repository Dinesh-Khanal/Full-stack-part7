import { useState } from "react";
export const useField = (type) => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  return {
    type,
    value,
    onChange,
  };
};

export const useFields = () => {
  const [values, setValues] = useState({
    content: "",
    author: "",
    info: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const keys = {
    type: "text",
    onChange,
  };
  return { values, setValues, keys };
};
