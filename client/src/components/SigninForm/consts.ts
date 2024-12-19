import { z } from 'zod';

const passwordValidation = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/);

export const schema = z
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

export type FormFields = z.infer<typeof schema>;
