import './Landing.scss';
import { NavBar } from '../../components';
import { LandingCanvas } from './LandingCanvas';

export const Landing = () => {
  return (
    <div className='container'>
      <NavBar />
      <div data-testid='home' className='home'>
        <div className='cube-wrapper'>
          <div className='welcome-text'>LANDING: Say Hello, to easy 3d sharing</div>
          <LandingCanvas />
        </div>
      </div>
    </div>
  );
};
