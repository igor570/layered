import './Home.scss';
import { NavBar } from '../../components';

export const Home = () => {
  return (
    <div className='container'>
      <NavBar />
      <div data-testid='home' className='home'>
        <div className='cube-wrapper'>
          <div className='welcome-text'>HOMEPAGE: Logged in</div>
        </div>
      </div>
    </div>
  );
};
