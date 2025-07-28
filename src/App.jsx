import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import ProductDetail from './productDetail';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={
          loggedIn ? <Navigate to="/products" /> : <Login onLogin={() => setLoggedIn(true)} />
        } />
        <Route path="/products" element={
          loggedIn ? <Dashboard /> : <Navigate to="/login" />
        } />
        <Route path="/products/:id" element={
          loggedIn ? <ProductDetail /> : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;
