import { ReactNode } from 'react';

type FormInputProps = {
  children: ReactNode;
};

export const FormInput = ({ children }: FormInputProps) => {
  return (
    <div data-testid='form-input' className='form-input'>
      {children}
    </div>
  );
};