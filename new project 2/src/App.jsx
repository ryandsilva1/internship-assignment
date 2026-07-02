// src/App.jsx

import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import About from "./components/About"
import Notes from "./components/Notes"
import Department from "./components/Department"
import Contact from "./components/Contact"
import Shop from "./components/Shop"
import Cart from "./components/Cart"

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
        <Route path="/Shop"       element={<Shop />} />
        <Route path="/Cart"       element={<Cart />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App