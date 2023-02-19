import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import UserPill from "./UserPill";
import UserPanel from "./UserPanel";
import LogInModal from "./form/LogInModal";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../../../firebase-config";

export default function User() {
  // STATE
  const { setCurrentUser } = useContext(GlobalContext);
  const [isUserPill, setIsUserPill] = useState(false);
  const [userPillAction, setUserPillAction] = useState("");
  const [isLogInModal, setIsLogInModal] = useState(false);
  // TOGGLE FUNCTION
  const userPillToggle = () => {
    setIsUserPill(!isUserPill);
  };

  // LOGIN/LOGOUT WITH FIREBASE
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = async () => {
    userPillToggle();
    try {
      await signOut(auth);
      setCurrentUser();
    } catch {
      alert(
        "Pour certaines raisons vous ne pouvez pas vous déconnecter, vérifiez votre connexion internet."
      );
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <UserPill
        onClick={userPillToggle}
        className={isUserPill ? "active" : ""}
      />

      {isUserPill ? (
        <UserPanel
          userPillToggle={userPillToggle}
          setIsSignUpModal={setIsLogInModal}
          setUserPillAction={setUserPillAction}
          logout={logout}
          setIsLogInModal={setIsLogInModal}
        />
      ) : null}

      {isLogInModal ? (
        <LogInModal
          userPillAction={userPillAction}
          signIn={signIn}
          signUp={signUp}
          setIsLogInModal={setIsLogInModal}
        />
      ) : null}
    </div>
  );
}
