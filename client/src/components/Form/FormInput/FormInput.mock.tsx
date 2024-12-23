import { Mocked } from '@storybook/test';
import { FormInput } from './FormInput';

vi.mock('./FormInput', () => {
  return {
    FormInput: vi.fn(() => {
      return <div data-testid='form-input' />;
    })
  };
});

export const mockedFormInput = FormInput as Mocked<typeof FormInput>;
