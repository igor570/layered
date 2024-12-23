import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { expect } from '@storybook/test';
import * as FormGroupStories from './FormGroup.stories';

const { FormGroupStory } = composeStories(FormGroupStories);

describe('FormGroupStories', () => {
  test('should render form group story', () => {
    render(<FormGroupStory />);

    const formGroupElements = screen.queryAllByTestId('form-group');
    expect(formGroupElements.length).toBeGreaterThanOrEqual(1);
  });
});
