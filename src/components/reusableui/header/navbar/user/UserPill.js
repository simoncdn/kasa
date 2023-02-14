import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";

export default function UserPill({ onClick, className }) {
  return (
    <UserPillStyled onClick={onClick} className={className}>
      <RxHamburgerMenu className="icon" />
      <HiUserCircle className="icon" />
    </UserPillStyled>
  );
}

const UserPillStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff32;
  padding: 2px 6px;
  gap: 12px;
  border-radius: 25px;
  margin-left: 40px;
  cursor: pointer;
  transition: 400ms ease;
  border: none;
  :hover {
    background-color: #ffffff60;
    transition: 400ms ease;
  }
  .icon {
    width: 40px;
    height: 40px;
    color: white;
    :nth-child(1) {
      margin-left: 10px;
      width: 20px;
      height: 20px;
    }
  }
  &.active {
    background-color: white;
    .icon {
      color: #191919;
    }
  }

  @media screen and (max-width: 768px) {
    .icon {
      width: 30px;
      height: 30px;
    }
  }
`;
