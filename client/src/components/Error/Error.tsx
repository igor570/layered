import './Error.scss';

type ErrorProps = { message: string };

export const Error = ({ message }: ErrorProps) => {
  return (
    <div data-testid='error' className='error'>
      {message}
    </div>
  );
};
