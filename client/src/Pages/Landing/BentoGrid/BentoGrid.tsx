import { BentoItem } from './BentoItem';

import './BentoGrid.scss';

export const BentoGrid = () => {
  return (
    <div className='items'>
      <BentoItem />
      <BentoItem />
      <BentoItem />
      <BentoItem />
    </div>
  );
};
