import { useLoginStore } from '../../stores';

interface AuthProps {
  authComponent: JSX.Element;
  guestComponent: JSX.Element;
}

export const Auth = ({ authComponent, guestComponent }: AuthProps) => {
  const isLoggedIn = useLoginStore((s) => s.isLoggedIn);

  return isLoggedIn ? authComponent : guestComponent;
};
