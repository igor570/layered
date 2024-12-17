// todo ask Igor to setup chromatic for storybook on his user, it needs to be setup by project author.
//  It's good for visual testing
import { Meta, StoryObj } from '@storybook/react';
import SigninForm from './SigninForm.tsx';

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
    render: ({type}) => <SigninForm  type={type}/>,
    args: {
        type: 'registration'
    }
}
export const LoginStory: Story = {
    render: ({type}) => <SigninForm  type={type}/>,
    args: {
        type: 'login'
    }
}
