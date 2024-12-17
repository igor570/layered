import { Mocked } from '@storybook/test';
import SignInForm from './SigninForm.tsx';

vi.mock('./SignInForm', () => {
    return {
        SignInForm: vi.fn(() => {
            return <div data-testid="sign-up-form"/>;
        })
    }
})

export const mockedSignInForm = SignInForm as Mocked<typeof SignInForm>
