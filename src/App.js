import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* -------HOME page link-------- */}
        <Route path="/home" element={<Home />}></Route>
        {/* -------ABOUT Page link-------- */}
        <Route path="/about" element={<About />}></Route>
        {/* -------CONTACTS Page link-------- */}
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
