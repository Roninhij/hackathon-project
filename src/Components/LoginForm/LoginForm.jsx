/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import "../LoginForm/LoginForm.css";
// import { useState, useEffect } from "react";
import coverImg from "../../../src/assets/images/coverImg.jpg";
import googleIcon from "../../../src/assets/images/googleIcon.png";
import { Input } from "../Input";
import { useGlobalContext } from "../../Context";
import "../../firebase_setup/firebase.js";
import firebase from "firebase/compat/app";
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
  const { handleGoogleSignIn, handleSignOut, user } = useGlobalContext()

  return (
    <>
      {!user ? (
        <>
          <div className="w-full min-h-screen flex flex-col md:flex-row items-start bg-[#f5f5f5]">
            <div className="relative w-full md:w-1/2 flex flex-col">
              <div className="absolute top-1/4 md:top-[18%] left-0 md:left-[25%] flex flex-col">
                <h1 className="text-6xl text-black font-bold text-center md:text-left mx-4 md:mx-0">
                  Be my Guest!
                </h1>
                <p className="text-2xl text-black font-semibold text-center md:text-left mx-4 md:mx-0">
                  A social platform to explore cultural diversity
                </p>
              </div>

              <img
                src={coverImg}
                className="w-full h-auto md:my-44 object-cover mx-auto md:mx-32 rounded-md"
                alt="Cover"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#f5f5f5] flex flex-col p-4 md:p-52 justify-between items-center">
              <div className="w-full max-w-[500px] mx-auto">
                <div className="w-full flex flex-col mb-4">
                  <h3 className="text-3xl font-semibold mb-2 text-center md:text-left">
                    Login
                  </h3>
                  <p className="text-base mb-2 text-center md:text-left">
                    Welcome Back! Please Enter your details.
                  </p>
                </div>

                <div className="w-full flex flex-col mb-4">
                  <input
                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                    type="email"
                    placeholder="Email"
                  />

                  <input
                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <div className="w-full flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <p className="text-sm">Remember Me for 30 days</p>
                  </div>
                  <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                    Forgot Password?
                  </p>
                </div>

                <div className="w-full flex flex-col mb-4">
                  <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                    Login
                  </button>
                  <button className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                    Sign Up
                  </button>
                </div>

                <div className="w-full flex items-center justify-center relative py-2">
                  <div className="w-full h-[1px] bg-black/40"></div>
                  <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">
                    or
                  </p>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={googleIcon}
                    className="h-6 mr-6"
                    alt="Google Icon"
                  />
                  Sign in With Google
                </button>
              </div>

              <div className="w-full flex items-center justify-center">
                <p className="text-sm font-normal text-[#060606]">
                  Dont have an account?{" "}
                  <span className="font-semibold underline underline-offset-2 cursor-pointer">
                    Sign up for free
                  </span>
                </p>
              </div>

            </div>
          </div>

          {/* <div className="loginIntro">
            <h1 className="bigHeader">Welcome to our Meatup Application</h1>
            <h2 className="smallerHeader">please click below to login</h2>
          </div> */}
          <div>
            {/*Dont delete from here please!! :)  */}
            {/* <div onClick={handleGoogleSignIn}></div> */}
            {/* Corrected logout button */}

            {/* <div onClick={handleSignOut}></div> */}
          </div>
        </>
      ) : (
        // Assuming EventList is a component you want to render when the user is logged in
        <EventList />
      )}
    </>
  )
}
