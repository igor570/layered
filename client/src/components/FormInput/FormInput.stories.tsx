import { Meta, StoryObj } from '@storybook/react';
import { hydrateStories } from '../../utils/common';
import { FormInput } from './FormInput';

const meta: Meta<typeof FormInput> = { component: FormInput };

export default meta;

type Story = StoryObj<typeof FormInput>;

export const FormInputStory: Story = {
  render: () => hydrateStories(<FormInput type='email' />)
};
