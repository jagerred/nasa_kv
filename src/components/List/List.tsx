'use client';

import { useContext } from 'react';

import Card from '@/components/Card/Card';
import { CartContext } from '@/context/Cart';
import { MetricaContext } from '@/context/Metrica';
import { bindStyles } from '@/helpers/bindStyles';
import { formatDistance } from '@/helpers/formatDistance';
import { getStringFromDate } from '@/helpers/getStringFromDate';
import { Asteroid } from '@/types/astreoids';

import styles from './List.module.css';

const cx = bindStyles(styles);

type ListMode = 'interactive' | 'static';

interface Props {
  asteroids: Asteroid[];
  mode?: ListMode;
}

const List = ({ asteroids, mode = 'interactive' }: Props) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { metrica } = useContext(MetricaContext);
  const isInteractive = mode === 'interactive';
  const createCardList = () => {
    return asteroids.map((asteroid) => {
      const {
        id,
        estimated_diameter,
        name,
        is_potentially_hazardous_asteroid,
        close_approach_data
      } = asteroid;

      const { close_approach_date, miss_distance } = close_approach_data[0];

      const isAsteroidInCart = isInteractive
        ? cart.find((cartAsteroid) => cartAsteroid.id === id)
        : false;

      const distance = formatDistance({ distance: miss_distance[metrica], metrica });
      const radius = Math.round(estimated_diameter.meters.estimated_diameter_max);
      const date = getStringFromDate(close_approach_date, 'short');

      return isInteractive ? (
        <Card
          key={id}
          id={id}
          name={name}
          radius={radius}
          isDangerous={is_potentially_hazardous_asteroid}
          date={date}
          distance={distance}
          isAdded={!!isAsteroidInCart}
          add={() => addToCart(asteroid)}
          remove={() => removeFromCart(id)}
        />
      ) : (
        <Card
          key={id}
          id={id}
          name={name}
          radius={radius}
          isDangerous={is_potentially_hazardous_asteroid}
          date={date}
          distance={distance}
          noButton
        />
      );
    });
  };

  return <div className={cx('container')}>{createCardList()}</div>;
};
export default List;
