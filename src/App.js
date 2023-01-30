import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<SingleCocktail />} path="/cocktail/:id" />
          <Route element={<Error />} path="*" />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
