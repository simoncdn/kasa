import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";

import Toast from "../../Toast";
import User from "./user/User";

export default function Navbar() {
  const location = useLocation();
  const arrNav = [
    {
      label: "Accueil",
      id: "home",
      path: "/",
    },
    {
      label: "A propos",
      id: "about",
      path: "/about",
    },
  ];

  return (
    <NavbarStyled className="navbar">
      {arrNav.map((item, index) => {
        return (
          <Link
            className={
              location.pathname === item.path ? "selected" : "unselected"
            }
            key={index}
            id={`${item.id}`}
            to={`${item.path}`}
          >
            {item.label}
          </Link>
        );
      })}

      <User />
      <Toast />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0px;
  width: 100%;
  justify-content: end;

  a {
    text-transform: none;
    list-style-type: none;
    font-size: 18px;
    margin-left: 40px;
    font-weight: 600;
    color: white;
    &:visited {
      color: white;
    }
    &.unselected {
      text-decoration: none;
    }
    &.selected {
      text-decoration: underline;
    }
  }
  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: end;
    height: 70px;
    a {
      font-size: 12px;
      margin-left: 20px;
    }
  }
`;
