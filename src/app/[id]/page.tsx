import axios from 'axios';

import AsteroidApproach from '@/components/AsteroidApproach/AsteroidApproach';
import { bindStyles } from '@/helpers/bindStyles';
import { formatDistance } from '@/helpers/formatDistance';
import { getStringFromDate } from '@/helpers/getStringFromDate';
import { Asteroid } from '@/types/astreoids';

import styles from './asteroid.module.css';

interface Props {
  params: {
    id: string;
  };
}
const cx = bindStyles(styles);
export const getAsteroid = async (id: string) => {
  const { data } = await axios(
    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return data;
};

const AsteroidPage = async ({ params: { id } }: Props) => {
  const data: Asteroid = await getAsteroid(id);
  const { close_approach_data, name } = data;

  const approachList = close_approach_data.map((approach) => {
    const { close_approach_date_full, miss_distance, relative_velocity, orbiting_body } = approach;
    const distance = formatDistance({ distance: miss_distance.kilometers, metrica: 'kilometers' });
    const fullVelocity = `${Math.round(Number(relative_velocity.kilometers_per_hour))} км/ч`;
    const approachDate = getStringFromDate(close_approach_date_full, 'full');
    return (
      <li className='item' key={close_approach_date_full + orbiting_body}>
        <AsteroidApproach
          approach={approachDate}
          missDistance={distance}
          orbit={orbiting_body}
          velocity={fullVelocity}
        />
      </li>
    );
  });

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>Астероид {name}</h2>
      <ul className={cx('list')}>{approachList}</ul>
    </div>
  );
};

export default AsteroidPage;
