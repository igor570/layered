import './Home.scss';
import { NavBar } from '../../components';
import { HomeCanvas } from './HomeCanvas';

export const Home = () => {
  return (
    <div className='container'>
      <NavBar />
      <div data-testid='home' className='home'>
        <div className='cube-wrapper'>
          <div className='welcome-text'>Say Hello, to easy 3d sharing</div>
          <HomeCanvas />
        </div>
      </div>
    </div>
  );
};
