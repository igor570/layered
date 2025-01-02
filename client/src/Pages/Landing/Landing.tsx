import './Landing.scss';
import { NavBar } from '../../components';
import { BentoGrid } from './BentoGrid/BentoGrid';

export const Landing = () => {
  return (
    <div className='container'>
      <NavBar />
      <BentoGrid />
    </div>
  );
};
