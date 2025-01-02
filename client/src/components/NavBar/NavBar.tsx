import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '../../stores';
import './NavBar.scss';

export const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = useLoginStore((s) => s.isLoggedIn);

  if (!isLoggedIn)
    return (
      <nav className='nav'>
        <ul className='nav-items'>
          <a className='nav-item' onClick={() => navigate('/signup')}>
            Sign Up
          </a>
          <a className='nav-item' onClick={() => navigate('/login')}>
            Sign In
          </a>
        </ul>
      </nav>
    );
  return (
    <nav className='nav'>
      <ul className='nav-items'>
        <a className='nav-item' onClick={() => navigate('/community')}>
          Community
        </a>
        <a className='nav-item' onClick={() => navigate('/stall')}>
          Stall
        </a>
        <a className='nav-item' onClick={() => navigate('/profile')}>
          Profile
        </a>
        <a className='nav-item' onClick={() => navigate('/signout')}>
          Sign Out
        </a>
      </ul>
    </nav>
  );
};
