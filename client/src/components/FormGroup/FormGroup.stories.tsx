import { Meta, StoryObj } from '@storybook/react';
import { hydrateStories } from '../../utils/common';
import { FormGroup } from './FormGroup';
import { FormInput } from '../FormInput';

const meta: Meta<typeof FormGroup> = { component: FormGroup };

export default meta;

type Story = StoryObj<typeof FormGroup>;

export const FormGroupStory: Story = {
  render: () =>
    hydrateStories(
      <FormGroup>
        <FormInput>
          <input className='form-input' type='text' placeholder='Email' />
        </FormInput>
      </FormGroup>
    )
};
