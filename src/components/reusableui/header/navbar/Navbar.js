import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import ConnexionPanel from "./user/LoginPanel";
import UserPill from "./user/UserPill";
import UserPillExtension from "./user/UserPanel";

import "react-toastify/dist/ReactToastify.css";
import { ImHome } from "react-icons/im";
import Toast from "../../Toast";
import User from "./user/User";

export default function Navbar() {
  const location = useLocation();
  const [isUserPill, setIsUserPill] = useState(false);
  const { setIsConnexionPanel, isConnexionPanel, setUsername, username } =
    useContext(GlobalContext);

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

  const userPillToggle = () => {
    setIsUserPill(!isUserPill);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(username);
    setIsConnexionPanel(!isConnexionPanel);
    if (username) {
      toast.info(`Bienvenue ${username}`, {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <ImHome />,
      });
    }
  };
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
