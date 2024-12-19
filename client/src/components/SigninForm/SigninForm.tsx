import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import { FormFields, schema } from './consts';

import { useCreateUser, useLoginUser } from '../../hooks';
import './SignInForm.scss';
import { useLoginStore } from '../../stores/useLoginStore';

export interface SigninFormProps {
  type: 'registration' | 'login';
}

export const SigninForm = ({ type }: SigninFormProps) => {
  const navigate = useNavigate();
  const setIsLoggedIn = useLoginStore((s) => s.setIsLoggedIn);
  const [isLogin, setIsLogin] = useState(false);
  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: loginUser } = useLoginUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const formText = isLogin ? 'Login' : 'Sign Up';

  useEffect(() => setIsLogin(type === 'login'), [type]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const { email, password } = data;

    try {
      if (!isLogin) {
        await createUser({ email, password });
      }
      await loginUser({ email, password });
      setIsLoggedIn(true);
      navigate('/');
      reset();
    } catch (error) {
      toast.error('An error occurred, please try again.');
      console.error(error);
    }
  };

  return (
    <>
      <form data-testid='SignInForm' className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form-header'>{formText}</h2>
        <div className='form-group'>
          <input className='form-input' {...register('email')} type='text' placeholder='Email' />
          {errors.email && <div className='form-error'>{errors.email.message}</div>}
        </div>
        <div className='form-group'>
          <input className='form-input' {...register('password')} type='password' placeholder='Password' />
          {errors.password && <div className='form-error'>{errors.password.message}</div>}
        </div>
        {!isLogin && (
          <div className='form-group'>
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
      <ToastContainer />
    </>
  );
};
