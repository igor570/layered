import './Home.scss';
import { NavBar } from '../../components';

export const Home = () => {
  return (
    <div className='test'>
      <NavBar />
      <div data-testid='home' className='home'>
        homepage
      </div>
    </div>
  );
};
