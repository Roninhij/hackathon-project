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
          <div className="w-full h-screen flex items-start bg-[#f5f5f5]">
            <div className="relative w-1/2 h-full flex flex-col">
              <div className="absolute top-[17%] left-[%] flex flex-col">
                <h1 className="text-6xl text-black font-bold  mx-[250px]">
                  Be my Guest!
                </h1>
                <p className="text-2xl text-black font-semibold mx-56">
                  A social platform to explore cultural diversity
                </p>
              </div>

              <img
                src={coverImg}
                className="w-full my-44 object-cover mx-40 rounded-md"
              />
            </div>
            <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
              <h1 className="text-xl text-[#060606] font-semibold"></h1>

              <div className="w-full flex flex-col max-w-[500px] ">
                <div className=" w-full flex flex-col mb-2">
                  <h3 className="text-3xl font-semibold mb-2">Login</h3>
                  <p className="text-base mb-2">
                    Welcome Back! Please Enter your details.
                  </p>
                </div>

                <div className="w-full flex flex-col">
                  <input
                    className="w-full text-black py-2 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none"
                    type="email"
                    placeholder="Email"
                  />

                  <input
                    className="w-full text-black py-2 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <p className="text-sm ">Remember Me for 30 days</p>
                  </div>
                  <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                    Forgot Password?
                  </p>
                </div>

                <div className="w-full flex flex-col my-4">
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
                  <img src={googleIcon} className="h-6 mr-6" />
                  Sign in With Google
                </button>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-sm font-normal text-[#060606]">
                  Dont have a account?{" "}
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
