import { useState } from "react";
import styled from "styled-components";
import SubmitBtn from "../../../../SubmitBtn";
import InputForm from "./InputForm";
import ModalSeparation from "./ModalSeparation";
import SocialMediaLogIn from "./SocialMediaLogIn";

export default function SignInForm({ signIn, setIsLogInModal }) {
  // STATE
  const [isEmail, setIsEmail] = useState("");
  const [isEmailErr, setIsEmailErr] = useState();
  const [isPassword, setIsPassword] = useState("");
  const [isPasswordErr, setIsPasswordErr] = useState();

  // HANDLE INPUT FUNCTION
  const handleIsEmail = (event) => {
    setIsEmail(event.target.value);
    setIsEmailErr();
  };
  const handleIsPassword = (event) => {
    setIsPassword(event.target.value);
    setIsPasswordErr();
  };

  // SIGNIN SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const cred = await signIn(isEmail, isPassword);
      setIsLogInModal(false);
      setIsEmail();
      setIsPassword();
    } catch (error) {
      console.log(error);

      if (error.code === "auth/user-not-found") {
        setIsEmailErr("Adresse email invalide");
      }
      if (error.code === "auth/wrong-password") {
        setIsPasswordErr("Mot de passe invalide");
      }
    }
  };

  return (
    <SignUpFormStyled>
      <div className="form-title">
        <h3>Bienvenue sur Kasa</h3>
      </div>

      <form className="form-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <InputForm
            type="email"
            placeholder="Email"
            value={isEmail}
            onChange={handleIsEmail}
            errorDisplay={isEmailErr}
          />
        </div>

        <div className="form-group">
          <InputForm
            type="password"
            placeholder="Mot de passe"
            value={isPassword}
            onChange={handleIsPassword}
            errorDisplay={isPasswordErr}
          />
        </div>

        <SubmitBtn label="Continuer" />
      </form>

      <ModalSeparation />

      <SocialMediaLogIn setIsLogInModal={setIsLogInModal} />
    </SignUpFormStyled>
  );
}

const SignUpFormStyled = styled.div`
  padding: 0px 30px;
  .form-title {
    margin: 20px 0px;
    h3 {
      color: white;
      font-size: 20px;
    }
  }
  .form-body {
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 15px;
      width: 100%;
      span {
        color: lightgray;
        font-size: 12px;
      }
    }
  }
`;
