import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function LogInModal({
  userPillAction,
  signUp,
  signIn,
  setIsLogInModal,
}) {
  const closeLogInModal = () => {
    setIsLogInModal(false);
  };

  return (
    <LoginPanelStyled>
      <div className="overlay" onClick={closeLogInModal}></div>
      <div className="modal-content">
        <div className="modal-content-title">
          {userPillAction === "signIn" ? (
            <h2>Connexion</h2>
          ) : (
            <h2>Inscription</h2>
          )}
          <button onClick={closeLogInModal} className="button">
            <RxCross1 className="icon" />
          </button>
        </div>

        {userPillAction === "signIn" ? (
          <SignInForm signIn={signIn} setIsLogInModal={setIsLogInModal} />
        ) : (
          <SignUpForm signUp={signUp} setIsLogInModal={setIsLogInModal} />
        )}
      </div>
    </LoginPanelStyled>
  );
}

const LoginPanelStyled = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  .overlay {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-color: rgba(49, 49, 49, 0.6);
    transition: all 400ms ease;
  }
  .modal-content {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: auto;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background: rgba(49, 49, 49, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.34);
    backdrop-filter: blur(9.1px);
    -webkit-backdrop-filter: blur(9.1px);
    .modal-content-title {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 25px;
      border-bottom: 1px solid lightgrey;
      .button {
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px;
        width: 34px;
        height: 34px;
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-radius: 50%;
        .icon {
          width: 18px;
          height: 18px;
          color: white;
        }
        :hover {
          background-color: #ffffff60;
          transition: all 400ms ease;
        }
      }
      h2 {
        font-size: 20px;
        color: white;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .modal-content {
      top: 30%;
      width: 340px;
      .modal-content-title h2 {
        font-size: 14px;
      }
      h3 {
        font-size: 18px;
      }
      input {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 490px) {
  }
`;
