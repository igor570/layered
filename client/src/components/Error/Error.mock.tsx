import { Mocked } from 'vitest';

import './Error';

vi.mock('./Error', () => {
  return {
    Error: vi.fn(() => {
      return <div data-testid='Error' />;
    })
  };
});

export const mockedError = Error as Mocked<typeof Error>;
