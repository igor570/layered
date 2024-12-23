import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { expect } from '@storybook/test';
import * as FormInputStories from './FormInput.stories';

const { FormInputStory } = composeStories(FormInputStories);

describe('FormInputStories', () => {
  test('should render form input story', () => {
    render(<FormInputStory />);

    const formInputElements = screen.queryAllByTestId('form-input');
    expect(formInputElements.length).toBeGreaterThanOrEqual(1);
  });
});
