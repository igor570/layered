import { Meta, StoryObj } from '@storybook/react';
import { hydrateStories } from '../../utils/common';
import { FormGroup } from './FormGroup';

const meta: Meta<typeof FormGroup> = { component: FormGroup };

export default meta;

type Story = StoryObj<typeof FormGroup>;

export const FormGroupStory: Story = {
  render: () =>
    hydrateStories(
      <FormGroup>
        <input />
      </FormGroup>
    )
};
