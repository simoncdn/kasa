import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

export const socialMediaConfigs = [
  {
    id: "Facebook",
    applicationAuthProvider: FacebookAuthProvider,
    logo: <IoLogoFacebook className="logo facebook" />,
  },
  {
    id: "Google",
    applicationAuthProvider: GoogleAuthProvider,
    logo: <FcGoogle className="logo google" />,
  },
  {
    id: "Github",
    applicationAuthProvider: GithubAuthProvider,
    logo: <FaGithubSquare className="logo github" />,
  },
];
