/* eslint-disable react/prop-types */
import { Input } from '../Input'
import '../LoginForm/LoginForm.css'
import { useGlobalContext } from '../../Context'
import '../../firebase_setup/firebase.js'
import firebase from 'firebase/compat/app'
import { useState, useEffect } from 'react'
import EventList from './EventList.jsx'
export const LoginForm = ({
  action,
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  const { handleGoogleSignIn, handleSignOut, user } = useGlobalContext()

  return (
    <>
      {!user ? (
        <>
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === 'Sign Up' && (
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            )}
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {action === 'Login' && (
            <div className="forget-password">
              Forgot Password? <span>Click Here!</span>
            </div>
          )}
          <div className="submit-container">
            <div
              className={action === 'Login' ? 'submit gray' : 'submit'}
              onClick={() => handleSubmit('Sign Up')}
            >
              Sign Up
            </div>
            <div
              className={action === 'Sign Up' ? 'submit gray' : 'submit'}
              onClick={() => handleSubmit('Login')}
            >
              Log In
            </div>
            {/*Dont delete from here please!! :)  */}
            <div onClick={handleGoogleSignIn}>Login with google</div>
            {/* Corrected logout button */}
            <div onClick={handleSignOut}>Logout</div>
            <div>{user ? 'ddfsd' : ''}</div>
          </div>
        </>
      ) : (
        // Assuming EventList is a component you want to render when the user is logged in
        <EventList />
      )}
    </>
  )
}
