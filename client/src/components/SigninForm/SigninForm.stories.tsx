// todo ask Igor to setup chromatic for storybook on his user, it needs to be setup by project author.
//  It's good for visual testing
import { Meta, StoryObj } from '@storybook/react';
import SignInForm from './SignInForm';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// todo outsource provider to function
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false // Disable retries for testing
      }
    }
  });
const queryClient = createTestQueryClient();

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  argTypes: {
    type: {
      options: ['registration', 'login'],
      control: {
        type: 'radio'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof SignInForm>;

export const RegistrationStory: Story = {
  render: ({ type }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignInForm type={type} />
      </MemoryRouter>
    </QueryClientProvider>
  ),
  args: {
    type: 'registration'
  }
};

export const LoginStory: Story = {
  render: ({ type }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignInForm type={type} />
      </MemoryRouter>
    </QueryClientProvider>
  ),
  args: {
    type: 'login'
  }
};
