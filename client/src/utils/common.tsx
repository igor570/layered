import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Navigate } from 'react-router-dom';
import { useLoginStore } from '../stores';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false // Disable retries for testing
      }
    }
  });

export const hydrateStories = (children: ReactElement): ReactElement => {
  return (
    <QueryClientProvider client={createTestQueryClient()}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
};

interface ProtectedRouteProps {
  children: ReactElement;
  authRoute: string;
}

export const ProtectedRoute = ({ children, authRoute }: ProtectedRouteProps) => {
  const isLoggedIn = useLoginStore((s) => s.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={authRoute} replace />;
  }
  return children;
};
