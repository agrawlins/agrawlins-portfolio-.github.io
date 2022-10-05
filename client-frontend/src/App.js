import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from "./components/header/header";
import HomeDisplay from './components/home/homeDisplay/homeDisplay';
import HistoriesDisplay from './components/history/historyDisplay/historyDisplay';
import ProjectsDisplay from "./components/projects/projectDisplay/projectDisplay";
import Contact from "./components/contact/contact";
import Footer from './components/footer/footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router> 
            <Header />
            <Routes className="Routes"> 
                <Route path ="/" element={<HomeDisplay />} /> 
                <Route path ="/history" element={<HistoriesDisplay />} />
                <Route path ="/projects" element={<ProjectsDisplay />} /> 
                <Route path ="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;