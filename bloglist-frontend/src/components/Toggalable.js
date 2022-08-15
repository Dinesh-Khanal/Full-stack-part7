import { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background-color: #4040bb;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;

const Toggalable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false);

  const showOnVisible = { display: visible ? "" : "none" };
  const hideOnVisible = { display: visible ? "none" : "" };
  const visibleToggle = () => {
    setVisible(!visible);
  };
  useImperativeHandle(refs, () => {
    return {
      visibleToggle,
    };
  });
  return (
    <>
      <div style={showOnVisible} data-testid="toggalable">
        {props.children}
        <Button onClick={visibleToggle}>{props.btn1}</Button>
      </div>
      <div style={hideOnVisible}>
        <Button onClick={visibleToggle}>{props.btn2}</Button>
      </div>
    </>
  );
});
Toggalable.displayName = "Toggalable";
Toggalable.propTypes = {
  btn1: PropTypes.string.isRequired,
  btn2: PropTypes.string.isRequired,
};
export default Toggalable;
