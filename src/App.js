import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react'
import './styles/App.css';

function App() {
  return (
    <Router basename="/friendship_quiz/">
        <Switch>
            <Route exact path='/home' Component={Home} />
            <Route exact path='/question' Component={Question} />
            <Route exact path='/result' Component={Result} />
        </Switch>
    </Router>
  );
}

export default App;