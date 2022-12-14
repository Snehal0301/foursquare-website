import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Reviews from './components/reviews/Reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
    <Router />


  </BrowserRouter>
);

