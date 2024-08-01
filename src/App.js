// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/mainPage/Main'
import Main2 from './pages/mainPage2/Main2';
import Login from './pages/loginPage/Login';
import Register from './pages/registerPage/Register';
import Resetpass from './pages/resetpassPage/Resetpass';
import Tienda from './pages/tiendasPage/Tienda';
import Settings from './pages/settingsPage/Settings';
import History from './pages/historyPage/History';
import Carrito from './pages/carPage/Car';



const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/main" element={<Main2 />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpass" element={<Resetpass/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </Router>
  );
};

export default App;
