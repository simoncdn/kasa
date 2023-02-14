import React, { useContext, useState } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import UserPill from "./UserPill";
import LoginPanel from "./LoginPanel";
import { toast } from "react-toastify";
import { ImHome } from "react-icons/im";
import UserPanel from "./UserPanel";

export default function User() {
  const [isUserPill, setIsUserPill] = useState(false);
  const { setIsLoginPanel, isLoginPanel, setUsername, username } =
    useContext(GlobalContext);

  const userPillToggle = () => {
    setIsUserPill(!isUserPill);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(username);
    setIsLoginPanel(!setIsLoginPanel);
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
    <div>
      <UserPill
        onClick={userPillToggle}
        className={isUserPill ? "active" : ""}
      />
      {isUserPill ? <UserPanel userPillToggle={userPillToggle} /> : null}
      {isLoginPanel ? <LoginPanel handleSubmit={handleSubmit} /> : null}
    </div>
  );
}
