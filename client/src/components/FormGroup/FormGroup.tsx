import { ReactNode } from 'react';

type FormGroupProps = {
  children: ReactNode;
};

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className='form-group'>{children}</div>;
};

export default FormGroup;
