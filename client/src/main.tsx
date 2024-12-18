import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SigninForm, Home } from './components';

import './index.css';

const appClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={appClient}>
      <BrowserRouter>
        <Routes>
          {/* todo change home route to /, but set up signup form as auth guard */}
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SigninForm type='registration' />} />
          <Route path='/login' element={<SigninForm type='login' />} />
          {/* <Route path="/" element={ <Home> } /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
