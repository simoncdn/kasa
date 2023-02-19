import styled from "styled-components";
import GlobalContext from "../../context/GlobalContext";
import Navbar from "./navbar/Navbar";
import { useContext } from "react";
export default function Header() {
  return (
    <HeaderStyled>
      <div className="logo-container">
        <img src="/Images/logo.svg" alt="logo Kasa" />
      </div>

      <Navbar />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  background-color: #191919;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  padding: 25px 50px;
  border-bottom: 2px solid #ffffff32;
  z-index: 20;
  .logo-container {
    display: flex;
    align-items: center;
    img {
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 25px;
    a {
      font-size: 14px;
    }
  }
`;
