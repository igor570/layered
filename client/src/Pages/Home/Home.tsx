import './Home.scss';
import { NavBar } from '../../components';

export const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div data-testid='home' className='home'>
        <div className='welcome-text'>Say Hello, to easy 3d sharing</div>
      </div>
    </div>
  );
};
