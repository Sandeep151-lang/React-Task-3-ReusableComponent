import React from 'react'
import './App.css'
import Sidebars from './components/Sidebars'
import HomePage from './components/HomePage'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
      <div id="wrapper">
          <Sidebars />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <Dashboard />
            <HomePage/>
            </div>
          </div>
      </div>
      </Router>
    </>
  )
}

export default App
