import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import About from "./components/About";
import Notes from "./components/Notes";
import Department from "./components/Department";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/About"      element={<About />} />
        <Route path="/Notes"      element={<Notes />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/Contact"    element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;