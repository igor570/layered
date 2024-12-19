import { useMutation } from '@tanstack/react-query';

// todo have check for is dev environment and change url for live site
const baseurl = 'http://localhost:8000';

interface Payload {
  email: string;
  password: string;
}

const postSignup = async ({ email, password }: Payload): Promise<void> => {
  const response = await fetch(baseurl + '/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  // Check for response errors
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to sign up');
  }
};

export const useCreateUser = () => {
  const mutation = useMutation({
    mutationFn: postSignup,
    onSuccess: () => {
      console.log('User created successfully!');
    },
    onError: (error) => {
      console.error('Signup failed:', error.message);
    }
  });

  return mutation;
};
