import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SigninForm } from './components';
import { Home } from './Pages';
import { ProtectedRoute } from './utils/common';

import './index.scss';

const appClient = new QueryClient();

// todo change user prop to reflect whether user is logged in, currently hardcoded to true
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={appClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute authRoute='/signup'>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/signup' element={<SigninForm type='registration' />} />
          <Route path='/login' element={<SigninForm type='login' />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
