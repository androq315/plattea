// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/mainPage/Main';
import Login from './pages/loginPage/Login';
import Register from './pages/registerPage/Register';
import Resetpass from './pages/resetpassPage/Resetpass';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpass" element={<Resetpass/>}/>
      </Routes>
    </Router>
  );
};

export default App;
