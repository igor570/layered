import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SigninForm, Auth } from './components';
import { Home, Landing } from './Pages';

import './index.scss';

const appClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={appClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth authComponent={<Home />} guestComponent={<Landing />} />} />
          <Route path='/signup' element={<SigninForm type='registration' />} />
          <Route path='/login' element={<SigninForm type='login' />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
