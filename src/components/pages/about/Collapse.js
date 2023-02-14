import { useState } from "react";
import styled from "styled-components";

export default function Dropdown({ title, content }) {
  const [toggle, setToggle] = useState(false);

  const activateCollapse = () => {
    setToggle((prevValue) => !prevValue);
  };

  return (
    <CollapseStyled>
      <div onClick={activateCollapse} className="collapse-title">
        <h2>{title}</h2>
        <img
          src="/Images/downArrow.svg"
          alt="arrow"
          className={toggle ? " active-arrow" : "unactive"}
        />
      </div>
      <div className={toggle ? "collapse-txt active-txt" : "collapse-txt"}>
        {content}
      </div>
    </CollapseStyled>
  );
}

const CollapseStyled = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  .collapse-title {
    width: 100%;
    height: 50px;
    background-color: #ffffff32;
    border-radius: 5px;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 400ms ease;
    :hover {
      background-color: #ffffff60;
      transition: 400ms ease;
    }
  }

  .collapse-title h2 {
    color: white;
    font-size: 24px;
  }

  .collapse-txt {
    width: 100%;
    background-color: #191919;
    border-radius: 0px 0px 5px 5px;
    padding: 20px;
    display: none;
    color: white;
    font-size: 20px;
  }

  .active-txt {
    display: block;
  }
  .unactive-arrow {
    transform: rotate(0deg);
  }
  .active-arrow {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    .collapse-container {
      margin-bottom: 20px;
    }
    .collapse-title {
      height: 30px;
      padding: 5px 11px;
    }
    .collapse-title h2 {
      font-size: 13px;
    }
    .collapse-title img {
      width: 15px;
    }
    .collapse-txt {
      padding: 20px 11px;
      font-size: 12px;
    }
  }
`;
