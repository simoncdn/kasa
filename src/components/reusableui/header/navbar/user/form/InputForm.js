import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import styled from "styled-components";
export default function InputForm({
  onChange,
  value,
  type,
  placeholder,
  errorDisplay,
}) {
  return (
    <>
      <InputFormStyled>
        <input
          htmlFor={type}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          required
        />
        {errorDisplay !== undefined ? (
          <AiFillExclamationCircle className="exclamation-icon" />
        ) : null}
      </InputFormStyled>

      <span>{errorDisplay}</span>
    </>
  );
}

const InputFormStyled = styled.div`
  position: relative;
  background-color: white;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  input {
    border-radius: 5px;
    padding: 10px;
    border: none;
    width: 100%;
    height: 100%;
  }
  .exclamation-icon {
    color: red;
    position: absolute;
    right: 5px;
  }
  .check-icon {
    color: green;
    position: absolute;
    right: 5px;
  }
  span {
    color: red;
    font-size: 10px;
  }
`;
