import './Landing.scss';
import { NavBar } from '../../components';
import { BentoGrid } from './BentoGrid/BentoGrid';

export const Landing = () => {
  return (
    <div className='container'>
      <NavBar />
      <section>
        <h1 className='title'>The future of 3D Sharing</h1>
        <BentoGrid />
      </section>
      <section className='placeholder-section'></section>
    </div>
  );
};
