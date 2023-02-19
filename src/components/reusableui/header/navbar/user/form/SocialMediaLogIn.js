import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../../../../../../firebase-config";
import { toast } from "react-toastify";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { socialMediaConfigs } from "./socialMediaConfigs";
export default function SocialMediaLogIn({ setIsLogInModal }) {
  const signInWithApplication = (applicationAuthProvider) => {
    const provider = new applicationAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        setIsLogInModal(false);
      })
      .catch((error) => {
        toast.info("Le compte existe déjà avec une autre application.", {
          theme: "dark",
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          icon: <BsFillExclamationTriangleFill />,
        });
      });
  };

  const socialMedias = socialMediaConfigs;

  return (
    <SignUpSocialMediaStyled>
      {socialMedias.map((media, index) => (
        <button
          key={index}
          className="social-media"
          onClick={() => signInWithApplication(media.applicationAuthProvider)}
        >
          {media.logo}
          <span>Continuer avec {media.id}</span>
        </button>
      ))}
    </SignUpSocialMediaStyled>
  );
}

const SignUpSocialMediaStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  .social-media {
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    padding: 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 200ms ease;
    :hover {
      background-color: rgba(255, 255, 255, 0.6);
      transition: all 400ms ease;
    }
    .logo {
      position: absolute;
      left: 0;
      margin-left: 30px;
      width: 30px;
      height: 30px;
      &.facebook {
        color: #3b5998;
      }
      &.github {
        color: #171515;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .social-media {
      .logo {
        margin-left: 15px;
        width: 30px;
        height: 30px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 490px) {
    .social-media {
      .logo {
        margin-left: 15px;
        width: 20px;
        height: 20px;
      }
      span {
        font-size: 12px;
      }
    }
  }
`;
