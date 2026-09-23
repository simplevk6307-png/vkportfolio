import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
const App = () => {
  return (
    <>
      {/* <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/> */}

      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        {/* <Footer/> */}
      </Router>

    </>
  )
}

export default App

