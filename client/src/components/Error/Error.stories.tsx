import { Meta, StoryObj } from '@storybook/react';
import { Error } from './Error';

const meta: Meta<typeof Error> = {
  component: Error
};

export default meta;

type Story = StoryObj<typeof Error>;

export const ErrorStory: Story = {
  render: () => <Error message='An error occurred' />
};
