import { useState, useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../context/GlobalContext";
import SubmitBtn from "../../../../SubmitBtn";
import InputForm from "./InputForm";
import ModalSeparation from "./ModalSeparation";
import SocialMediaLogIn from "./SocialMediaLogIn";

export default function SignUpForm({ signUp, setIsLogInModal }) {
  // STATE
  const { setIsSignUpModal } = useContext(GlobalContext);
  const [isEmail, setIsEmail] = useState("");
  const [isEmailErr, setIsEmailErr] = useState();
  const [isPassword, setIsPassword] = useState("");
  const [isPasswordErr, setIsPasswordErr] = useState();
  const [isConfirmPassword, setIsConfirmPassword] = useState("");
  const [isConfirmPasswordErr, setIsConfirmPasswordErr] = useState();

  // HANDLE INPUT FUNCTION
  const handleIsEmail = (event) => {
    setIsEmail(event.target.value);
    setIsEmailErr();
  };
  const handleIsPassword = (event) => {
    setIsPassword(event.target.value);
    setIsPasswordErr();
  };
  const handleIsConfirmPassword = (event) => {
    setIsConfirmPassword(event.target.value);
    setIsConfirmPasswordErr();
  };

  // LOGINSUBMIT
  let regexPassword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isPassword !== isConfirmPassword) {
      setIsConfirmPassword(false);
      setIsConfirmPasswordErr("Les mots de passes ne sont pas identiques.");
    }

    if (!regexPassword.test(isPassword)) {
      setIsPassword(false);
      setIsPasswordErr(
        "6 caractères, une minuscule, une majuscule et un chiffre minimum"
      );
    }
    if (isPassword === isConfirmPassword && regexPassword.test(isPassword)) {
      try {
        const cred = await signUp(isEmail, isPassword);

        setIsEmail();
        setIsPassword();
        setIsConfirmPassword();
        setIsSignUpModal(false);
      } catch (error) {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          setIsEmailErr("Email déjà utilisé");
        }
        if (error.code === "auth/invalid-email") {
          setIsEmailErr("Le format n'est pas valide");
        }
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
        <div className="form-group">
          <InputForm
            type="password"
            placeholder="Confirmer votre mot de passe"
            value={isConfirmPassword}
            onChange={handleIsConfirmPassword}
            errorDisplay={isConfirmPasswordErr}
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
