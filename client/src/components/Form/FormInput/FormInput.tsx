import './FormInput.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

type FormFieldTypes = 'email' | 'password' | 'confirmPassword';

type FormInputProps = {
  type: FormFieldTypes;
  inputProps?: UseFormRegisterReturn<FormFieldTypes>;
  placeholder?: string;
};

export const FormInput = (props: FormInputProps) => {
  const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <input
      data-testid='form-input'
      {...props?.inputProps}
      name={props.type}
      type={props.type}
      placeholder={props?.placeholder ?? capitalizeFirstLetter(props.type)}
      className='form-input'
    />
  );
};
