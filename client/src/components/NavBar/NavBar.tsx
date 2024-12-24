import { useNavigate } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
  const navigate = useNavigate();
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
      </ul>
    </nav>
  );
};
