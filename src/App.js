import React from 'react'
import MainSlice from './components/LandingPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import './App.css';

const App = () => {

    return (
      <Router>
        <Routes>
          <Route path ='/' element={<MainSlice />} />
          <Route path ='home' element={<HomePage />} />
        </Routes>
      </Router>
     )
}

export default App;