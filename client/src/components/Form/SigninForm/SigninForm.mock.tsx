import { Mocked } from '@storybook/test';
import { SigninForm } from './SigninForm';

vi.mock('./SignInForm', () => {
  return {
    SignInForm: vi.fn(() => {
      return <div data-testid='sign-up-form' />;
    })
  };
});

export const mockedSignInForm = SigninForm as Mocked<typeof SigninForm>;
