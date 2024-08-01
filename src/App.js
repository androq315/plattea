// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main2 from './pages/mainPage2/Main2';
import Login from './pages/loginPage/Login';
import Register from './pages/registerPage/Register';
import Resetpass from './pages/resetpassPage/Resetpass';
import Tienda from './pages/tiendasPage/Tienda';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpass" element={<Resetpass/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
      </Routes>
    </Router>
  );
};

export default App;
