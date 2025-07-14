import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/createEvent" element={<CreateEvent />} />
    </Routes>
  );
};

export default App;
