import { Meta, StoryObj } from '@storybook/react';
import { hydrateStories } from '../../utils/common';
import { SigninForm, SigninFormProps } from './index';

const meta: Meta<typeof SigninForm> = {
  component: SigninForm,
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

type Story = StoryObj<typeof SigninForm>;

export const RegistrationStory: Story = {
  render: (args: SigninFormProps) => hydrateStories(<SigninForm {...args} />),
  args: {
    type: 'registration'
  }
};

export const LoginStory: Story = {
  render: (args: SigninFormProps) => hydrateStories(<SigninForm {...args} />),
  args: {
    type: 'login'
  }
};
