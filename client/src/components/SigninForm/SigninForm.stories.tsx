// todo ask Igor to setup chromatic for storybook on his user, it needs to be setup by project author
import { Meta, StoryObj } from '@storybook/react';
import SigninForm from './SigninForm.tsx';

const meta: Meta<typeof SigninForm> = {
    component: SigninForm
};

export default meta;

type Story = StoryObj<typeof SigninForm>;

export const defaultStory: Story = {
    render: () => <SigninForm />
}
