import { bindStyles } from '@/helpers/bindStyles';

import styles from './AsteroidApproach.module.css';

interface Props {
  approach: string;
  missDistance: string;
  velocity: string;
  orbit: string;
}
const cx = bindStyles(styles);

const AsteroidApproach = ({ approach, velocity, missDistance, orbit }: Props) => {
  return (
    <ul className={cx('container')}>
      <li className={cx('item')}>Скорость относительно Земли: {velocity}</li>
      <li className={cx('item')}>Время максимального сближения: {approach}</li>
      <li className={cx('item')}>Расстояние до Земли:{missDistance}</li>
      <li className={cx('item')}>Орбита: {orbit}</li>
    </ul>
  );
};

export default AsteroidApproach;
