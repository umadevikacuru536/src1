import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './about';
import Home from './home';
import Header from './header';
import Conatct from './conatct';
import Footer from './footer';

function App() {
 
  return (
    <div className="App">
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/conatct" element={<Conatct/>} />
  <Route path="/header" element={<Header/>} />
 </Routes>
 <Footer/>
    </div>
  );
}

export default App;
