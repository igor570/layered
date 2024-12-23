import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as HomeStories from './Home.stories';

const { HomeStory } = composeStories(HomeStories);

describe('Home', () => {
  test('It should render home component', () => {
    render(<HomeStory />);

    const homeElement = screen.queryByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });
});
