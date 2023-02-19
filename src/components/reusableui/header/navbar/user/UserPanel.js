import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";
import PillButton from "./PillButton";

export default function UserPanel({
  userPillToggle,
  setUserPillAction,
  logout,
  setIsLogInModal,
}) {
  const { currentUser } = useContext(GlobalContext);

  const openLogInModal = (action) => {
    setIsLogInModal(true);
    setUserPillAction(action);
    userPillToggle();
  };

  return (
    <UserPillExtensionStyled>
      {currentUser ? (
        <>
          <p>Bonjour</p>
          <PillButton label="Déconnexion" onClick={logout} />
        </>
      ) : (
        <>
          <PillButton
            onClick={() => openLogInModal("signIn")}
            label="Connexion"
          />
          <PillButton
            onClick={() => openLogInModal("signUp")}
            label="Inscription"
          />
        </>
      )}
    </UserPillExtensionStyled>
  );
}

const UserPillExtensionStyled = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 20px;
  margin-top: 76px;
  z-index: 0;
  border-radius: 15px;
  padding: 10px 0px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  overflow: hidden;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: rgba(49, 49, 49, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.34);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  button {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    font-weight: 600;
    color: white;
    padding: 0px 10px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: left;

    :hover {
      background-color: #ffffff60;
      transition: all 400ms ease;
    }
  }
  p {
    color: white;
    padding: 0px 10px;
    span {
      font-weight: 600;
    }
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 85px;
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 490px) {
  }
`;
