import React from 'react';
import ReactDOM from 'react-dom';
import Admin from "./layouts/Admin.js";
import Auth from './layouts/Auth.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './index.css';
// import App from './Layout/Admin';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="auth" element={<Auth/>} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
