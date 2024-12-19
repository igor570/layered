import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useCreateUser, useLoginUser } from '../../hooks';
import './SignInForm.scss';

const passwordValidation = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/);
const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, {
        message: 'Your password must be at least 8 characters long'
      })
      .regex(passwordValidation, {
        message: 'Your password must contain a lowercase letter, uppercase letter, number, and symbol.'
      }),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data?.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword']
  });

type FormFields = z.infer<typeof schema>;

export type SigninFormProps = {
  type: 'registration' | 'login';
};

/* TODOS:
  - Test the mutation functions to see if it works, by running the dev server and firing requests
  - Make sure the validation holds up
  - Check if we are navigated to Home if we login
  - DISCUSS: Storing the session token given by useLoginUser hook
*/

export const SigninForm = ({ type }: SigninFormProps) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const { mutate: createUser } = useCreateUser();
  const { mutate: loginUser } = useLoginUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const formText = isLogin ? 'Login' : 'Sign Up';

  useEffect(() => setIsLogin(type === 'login'), [type]);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const { email, password } = data;

    if (!isLogin) {
      createUser({ email, password });
      navigate('/home');
    }
    if (isLogin) {
      loginUser({ email, password });
      navigate('/home');
    }
    reset();
  };

  return (
    <>
      <form data-testid='SignInForm' className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form-header'>{formText}</h2>
        <div className='form-group'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input className='form-input' {...register('email')} type='text' placeholder='Email' />
          {errors.email && <div className='form-error'>{errors.email.message}</div>}
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='password'>
            Password
          </label>
          <input className='form-input' {...register('password')} type='password' placeholder='Password' />
          {errors.password && <div className='form-error'>{errors.password.message}</div>}
        </div>
        {!isLogin && (
          <div className='form-group'>
            <label className='form-label' htmlFor='confirmPassword'>
              Confirm Password
            </label>
            <input
              className='form-input'
              {...register('confirmPassword')}
              type='password'
              placeholder='Confirm Password'
            />
            {errors.confirmPassword && <div className='form-error'>{errors?.confirmPassword.message}</div>}
          </div>
        )}
        <button className='form-button' disabled={isSubmitting} type='submit'>
          {isSubmitting ? 'Loading...' : formText}
        </button>
        <span className='form-link' onClick={() => navigate(isLogin ? '../signup' : '../login')}>
          {isLogin ? 'Are you a new user? Sign up here.' : 'Have you already got an account? Log in here.'}
        </span>
      </form>
    </>
  );
};
