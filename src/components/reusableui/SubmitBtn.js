import React from "react";
import styled from "styled-components";

export default function SubmitBtn({ label }) {
  return <SubmitBtnStyled>{label}</SubmitBtnStyled>;
}

const SubmitBtnStyled = styled.button`
  width: 100%;
  padding: 12px 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(180, 58, 105, 1) 0%,
    rgba(207, 72, 102, 1) 26%,
    rgba(255, 96, 96, 1) 55%
  );
  color: white;
  font-size: 14px;
  transition: all 200ms ease;
  opacity: 1;
  :hover {
    opacity: 0.8;
    transition: all 400ms ease;
  }
`;
