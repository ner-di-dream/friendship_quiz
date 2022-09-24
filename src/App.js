import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react'
import './styles/App.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/question' element={<Question />} />
            <Route path='/result' element={<Result />} />
        </Routes>
    </Router>
  );
}

export default App;