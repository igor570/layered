import { useMutation } from '@tanstack/react-query';

const baseurl = 'http://localhost:8000';

interface Payload {
  email: string;
  password: string;
}

// TODO: Test against the Dev Server to see if it works
// TODO: Potentially consolidate the hooks into one as a lot of it is duplicated?

const postLogin = async ({ email, password }: Payload): Promise<void> => {
  const response = await fetch(baseurl + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  // Check for response errors
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to login');
  }
};

const useLoginUser = () => {
  const mutation = useMutation({
    mutationFn: postLogin,
    onSuccess: () => {
      console.log('User logged in successfully');
    },
    onError: (error) => {
      console.error('Login failed:', error.message);
    }
  });

  return mutation;
};

export default useLoginUser;
