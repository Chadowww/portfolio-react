import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/pages/home';
import { Contact } from './component/pages/Contact';
import { Skill } from './component/pages/Skill';
import { Project } from './component/pages/Project';
import LoadingPage from './component/pages/LoadingPage';
import {AnimatePresence} from "framer-motion";

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <Router>
            <AnimatePresence>
                {loading ? (
                    <LoadingPage />
                ) : (
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/skill" element={<Skill />} />
                        <Route path="/project/:id" element={<Project />} />
                </Routes>
                )}
            </AnimatePresence>
        </Router>
    );
}

export default App;
