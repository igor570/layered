import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as ErrorStories from './Error.stories';

const {ErrorStory} = composeStories(ErrorStories)

describe("Error", () => {
    test("It should render error component", () => {
        render(<ErrorStory/>);

        const errorElement = screen.queryByTestId('error');
        expect(errorElement).toBeInTheDocument();
    });
});
