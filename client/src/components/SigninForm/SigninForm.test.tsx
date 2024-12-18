import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as SignInFormStories from './SignInForm.stories';

const { RegistrationStory, LoginStory } = composeStories(SignInFormStories);

describe('SignInForm', () => {
  test('It should render registration form', () => {
    render(<RegistrationStory />);

    const signInFormElement = screen.queryByTestId('SignInForm');
    expect(signInFormElement).toBeInTheDocument();
    expect(screen.getAllByText('Sign Up').length).toEqual(2);
  });

  test('It should render login form', () => {
    render(<LoginStory />);

    const signInFormElement = screen.queryByTestId('SignInForm');
    expect(signInFormElement).toBeInTheDocument();
    expect(screen.getAllByText('Login').length).toEqual(2);
  });
});
