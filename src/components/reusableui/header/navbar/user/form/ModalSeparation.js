import React from "react";
import styled from "styled-components";

export default function ModalSeparation() {
  return (
    <ModalSeparationStyled>
      <div className="separation-line"></div>
      <div className="separation-txt">
        <span>ou</span>
      </div>
      <div className="separation-line"></div>
    </ModalSeparationStyled>
  );
}
const ModalSeparationStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  .separation-line {
    background-color: lightgray;
    width: 100%;
    height: 1px;
    transform: translateY(2px);
  }
  .separation-txt {
    color: white;
    display: flex;
    margin: 0px 10px;
    span {
      font-size: 12px;
    }
  }
`;
