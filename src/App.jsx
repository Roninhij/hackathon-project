import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./Components/LoginForm/LoginForm";
import EventList from "./Components/LoginForm/EventList";
import CreateEvent from "./CreateEvent/CreateEvent";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/store" element={<LoginForm />} />
        {/* Uncomment and adjust paths as needed */}
        {/* <Route path="/Update/:MacbookId" element={<Update />} /> */}
        {/* <Route path="/addMacbook" element={<AddMacbook />} /> */}
        <Route path="/n" element={<Navbar />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/create-event" element={<CreateEvent />} />
        {/* <Route path="/footer" element={<Footer     />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
