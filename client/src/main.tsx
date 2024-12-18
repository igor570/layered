import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import Home from './components/Home/Home';
import SignInForm from './components/SignInForm/SignInForm';

const appClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={appClient}>
      <BrowserRouter>
        <Routes>
          {/* todo change home route to /, or make login form landing page */}
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignInForm type='registration' />} />
          <Route path='/login' element={<SignInForm type='login' />} />
          {/* <Route path="/" element={ <Home> } /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
