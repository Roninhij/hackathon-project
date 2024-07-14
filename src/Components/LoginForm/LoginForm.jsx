/* eslint-disable react/prop-types */
import { Input } from "../Input";
import "../LoginForm/LoginForm.css";
import { useGlobalContext } from "../../Context";
import "../../firebase_setup/firebase.js";
import firebase from "firebase/compat/app";
import { useState, useEffect } from "react";
import EventList from "./EventList.jsx";
export const LoginForm = ({
  action,
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  // handleSubmit,
}) => {
  const { handleGoogleSignIn, handleSignOut, user } = useGlobalContext();

  return (
    <>
      {!user ? (
        <>
          <div className="loginIntro">
            <h1 className="bigHeader">Welcome to our Meatup Application</h1>
            <h2 className="smallerHeader">please click below to login</h2>
          </div>
          <div className="submit-container">
            {/*Dont delete from here please!! :)  */}
            <div className="button-7" onClick={handleGoogleSignIn}>
              Login with google
            </div>
            {/* Corrected logout button */}
            <div className="button-7 logoutBtn" onClick={handleSignOut}>
              Logout
            </div>
          </div>
        </>
      ) : (
        // Assuming EventList is a component you want to render when the user is logged in
        <EventList />
      )}
    </>
  );
};
