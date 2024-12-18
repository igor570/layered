import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider

import * as SignInFormStories from './SignInForm.stories';

const { RegistrationStory, LoginStory } = composeStories(SignInFormStories);

// Create a new QueryClient instance for each test
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false // Disable retries for testing
      }
    }
  });

describe('SignInForm', () => {
  test('It should render registration form', () => {
    const queryClient = createTestQueryClient();

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <RegistrationStory />
        </QueryClientProvider>
      </MemoryRouter>
    );

    const signInFormElement = screen.queryByTestId('SignInForm');
    expect(signInFormElement).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('It should render login form', () => {
    const queryClient = createTestQueryClient();

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <LoginStory />
        </QueryClientProvider>
      </MemoryRouter>
    );

    const signInFormElement = screen.queryByTestId('SignInForm');
    expect(signInFormElement).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
