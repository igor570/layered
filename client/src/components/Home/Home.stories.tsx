import { Meta, StoryObj } from '@storybook/react';
import Home from './Home';

const meta: Meta<typeof Home> = {
  component: Home
};

export default meta;

type Story = StoryObj<typeof Home>;

export const HomeStory: Story = {
  render: () => <Home />
};
