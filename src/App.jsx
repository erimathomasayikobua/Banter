import { useState } from 'react'
import { Routes, Router, Route, BroswerRouter } from 'react-router-dom'
import './App.css'

function App() {
 
  return (
    <Routes>
      <Nav>
        <Link to="/">Home</Link>
      </Nav>

      <Router>
        <Route path="/" element={<Home />} />
      </Router>

      <Footer>
        <p>&copy; 2026 Banter.</p>
      </Footer>

    </Routes>
    )
}

export default App
