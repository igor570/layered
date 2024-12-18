import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import './SignInForm.scss';
import useCreateUser from '../../hooks/useCreateUser';
import useLoginUser from '../../hooks/useLoginUser';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

type FormFields = z.infer<typeof schema>;

export type SignInFormProps = {
  type: 'registration' | 'login';
};

/* TODOS:
  - Test the mutation functions to see if it works, by running the dev server and firing requests
  - Make sure the validation holds up
  - Check if we are navigated to Home if we login
  - DISCUSS: Storing the session token given by useLoginUser hook
*/

export const SignInForm = ({ type }: SignInFormProps) => {
  const navigate = useNavigate();
  const { mutate: createUser } = useCreateUser();
  const { mutate: loginUser } = useLoginUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const isLogin = type === 'login';
  const formTitle = isLogin ? 'Login' : 'Sign Up';

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const { email, password } = data;
    if (!isLogin) createUser({ email, password });
    if (isLogin) {
      loginUser({ email, password });
      navigate('/home');
    }
    reset();
  };

  return (
    <>
      <form data-testid='SignInForm' className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <h2>{formTitle}</h2>
        <input {...register('email')} type='text' placeholder='Email' />
        {errors.email && <div className='error'>{errors.email.message}</div>}
        <input {...register('password')} type='password' placeholder='Password' />
        {errors.password && <div className='error'>{errors.password.message}</div>}
        <button disabled={isSubmitting} type='submit'>
          {isSubmitting ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default SignInForm;
