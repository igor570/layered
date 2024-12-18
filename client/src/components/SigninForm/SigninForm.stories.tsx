import { Meta, StoryObj } from '@storybook/react';
import SignInForm from './SignInForm';
import { hydrateStories } from '../../utils/common.tsx';

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
  render: ({ type }) => hydrateStories(<SignInForm type={type} />),
  args: {
    type: 'registration'
  }
};

export const LoginStory: Story = {
  render: ({ type }) => hydrateStories(<SignInForm type={type} />),
  args: {
    type: 'login'
  }
};
