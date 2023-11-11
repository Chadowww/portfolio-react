import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import {Contact} from './component/Contact';
import {Skill} from './component/Skill';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skill" element={<Skill/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;