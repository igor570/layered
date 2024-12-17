import './Error.scss';

type ErrorProps = { message: string };

function Error({ message }: ErrorProps) {
  return (
    <div data-testid="error" className="error">
      {message}
    </div>
  );
}

export default Error;
