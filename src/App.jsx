import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/create-event" element={<CreateEvent />} />
    </Routes>
  );
};

export default App;
