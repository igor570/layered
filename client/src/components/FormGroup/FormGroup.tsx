import { ReactNode } from 'react';

import './FormGroup.scss';

type FormGroupProps = {
  children: ReactNode;
};

export const FormGroup = ({ children }: FormGroupProps) => {
  return (
    <div data-testid='form-group' className='form-group'>
      {children}
    </div>
  );
};
