// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import EventList from "./Components/LoginForm/EventList";
import CreateEvent from "./CreateEvent/CreateEvent";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWithNav />}>
          <Route index element={<Home />} />
          <Route path="store" element={<LoginForm />} />
          <Route path="event-list" element={<EventList />} />
          <Route path="home" element={<Home />} />
          <Route path="create-event" element={<CreateEvent />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />{" "}
        {/* Separate route for login */}
      </Routes>
    </Router>
  );
}

function LayoutWithNav() {
  const location = useLocation();
  const hideNavPaths = ["/login"]; // Paths where you don't want to show the navbar

  return (
    <div>
      {!hideNavPaths.includes(location.pathname) && <ResponsiveAppBar />}
      <Outlet />
    </div>
  );
}

export default App;
