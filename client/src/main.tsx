import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import Home from './components/Home/Home.tsx';
import SignInForm from './components/SignInForm/SigninForm.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* todo change home route to default, or make default login page for now */ }
        <Route path="/home" element={ <Home /> } />
        <Route path="/signup" element={ <SignInForm type="registration" /> } />
        {/* <Route path="/" element={ <Home> } /> */ }
      </Routes>
      <App />
    </BrowserRouter>
  </StrictMode>
);
