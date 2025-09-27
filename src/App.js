import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound'; 
import Navbar from './components/Navbar';
import User from './components/User/User';
import { Provider } from "react-redux";
import store from "./store.js";
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

function App() {
  return (
    <div class="main-container">
    <Provider store={store}>
          <Header/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/user" element={<User />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
          </Routes>
          <Footer/>
    </Provider>
    
    </div>
  );
}
export default App;
