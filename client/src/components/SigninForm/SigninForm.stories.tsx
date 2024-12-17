// todo ask Igor to setup chromatic for storybook on his user, it needs to be setup by project author.
//  It's good for visual testing
import { Meta, StoryObj } from '@storybook/react';
import SignInForm from './SigninForm';

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
  render: ({ type }) => <SignInForm type={type} />,
  args: {
    type: 'registration'
  }
};
export const LoginStory: Story = {
  render: ({ type }) => <SignInForm type={type} />,
  args: {
    type: 'login'
  }
};
