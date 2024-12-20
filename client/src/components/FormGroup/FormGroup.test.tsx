import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as FormGroupStories from './FormGroup.stories';

const { FormGroupStory } = composeStories(FormGroupStories);

describe('FormGroupStories', () => {
  test('should render form group story', () => {
    render(<FormGroupStory />);

    const formGroupElement = screen.queryByTestId('form-group');
    expect(formGroupElement).toBeInTheDocument();
  });
});
