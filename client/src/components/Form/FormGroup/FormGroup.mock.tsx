import { Mocked } from '@storybook/test';
import { FormGroup } from './FormGroup';

vi.mock('./FormGroup', () => {
  return {
    FormGroup: vi.fn(() => {
      return <div data-testid='form-group' />;
    })
  };
});

export const mockedFormGroup = FormGroup as Mocked<typeof FormGroup>;
