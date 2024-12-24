import './Home.scss';
import { NavBar } from '../../components';

export const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div data-testid='home' className='home'></div>
    </div>
  );
};
