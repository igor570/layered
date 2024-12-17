import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as SignInFormStories from './SigninForm.stories';
const { RegistrationStory, LoginStory } = composeStories(SignInFormStories);

describe('SignInForm', () => {
  test('It should render registration form', () => {
    render(<RegistrationStory />);

    const signInFormElement = screen.queryByTestId('sign-in-form');
    expect(signInFormElement).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('It should render login form', () => {
    render(<LoginStory />);

    const signInFormElement = screen.queryByTestId('sign-in-form');
    expect(signInFormElement).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
});
