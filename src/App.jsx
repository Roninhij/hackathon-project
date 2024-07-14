import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { LoginForm } from './Components/LoginForm/LoginForm'
import EventList from './Components/LoginForm/EventList'
import CreateEvent from './CreateEvent/CreateEvent'
import './App.css'
import DynamicLayout from './layouts/DynamicLayout/DynamicLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DynamicLayout />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: '/create-event',
        element: <CreateEvent />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
