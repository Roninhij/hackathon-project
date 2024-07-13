import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./Components/LoginForm/LoginForm";
import EventList from "./Components/LoginForm/EventList";
import CreateEvent from "./CreateEvent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/store" element={<LoginForm />} />
        {/* Uncomment and adjust paths as needed */}
        {/* <Route path="/Update/:MacbookId" element={<Update />} /> */}
        {/* <Route path="/addMacbook" element={<AddMacbook />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
