import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-items'>
        <a className='nav-item'>Community</a>
        <a className='nav-item'>Stall</a>
        <a className='nav-item'>Profile</a>
      </ul>
    </nav>
  );
};
