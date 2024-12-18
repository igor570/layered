import { useMutation } from '@tanstack/react-query';

const baseurl = 'http://localhost:8000';

interface Payload {
  email: string;
  password: string;
}

/* TODOS:
  - MUST: Store session token that his API response gives us.
  - Potentially consolidate the functions.
*/

export const postLogin = async ({ email, password }: Payload): Promise<void> => {
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

export const useLoginUser = () => {
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
