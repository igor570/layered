import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Navigate } from 'react-router-dom';

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

// todo get correct user type. Should be an obj with isLoggedIn property, then check that in if statement
type ProtectedRouteProps = {
  user: any;
  children: ReactElement;
  authRoute: string;
};
export const ProtectedRoute = ({ user, children, authRoute }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to={authRoute} replace />;
  }
  return children;
};
