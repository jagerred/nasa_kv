'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import asteroidPic from '@/assets/img/png/asteroid.png';
import arrowSvg from '@/assets/img/svg/arrow.svg';
import { bindStyles } from '@/helpers/bindStyles';

import Button from '../Button/Button';

import styles from './Card.module.css';

const cx = bindStyles(styles);

interface Props {
  id: string;
  name: string;
  radius: number;
  isDangerous: boolean;
  isAdded?: boolean;
  noButton?: boolean;
  date: string;
  distance: string;
  add?: () => void;
  remove?: () => void;
}

const Card = ({
  id,
  name,
  radius,
  isDangerous,
  date,
  distance,
  add = () => {},
  remove = () => {},
  isAdded = false,
  noButton = false
}: Props) => {
  const isAsteroidBig = radius >= 200;
  const asteroidPicSize = isAsteroidBig ? [36, 40] : [22, 24];
  const [isInCart, setIsInCart] = useState(isAdded);
  const handleClick = () => {
    isInCart ? remove() : add();
    setIsInCart(!isInCart);
  };
  return (
    <div className={cx('container')}>
      <span className={cx('date')}>{date}</span>
      <div className={cx('info')}>
        <span className={cx('distance')}>
          {distance}
          <Image className={cx('arrowL')} src={arrowSvg} alt='distance' width={10} height={10} />
          <Image className={cx('arrowR')} src={arrowSvg} alt='distance' width={10} height={10} />
        </span>
        <Image
          src={asteroidPic}
          width={asteroidPicSize[0]}
          height={asteroidPicSize[1]}
          alt='asteroid'
        />
        <div className={cx('description')}>
          <span className={cx('name')}>{name}</span>
          <span className={cx('radius')}>Ø {radius} м</span>
        </div>
      </div>
      <div className={cx('footer')}>
        {!noButton && (
          <Button onClick={handleClick} secondary={isInCart}>
            {isInCart ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
          </Button>
        )}
        {isDangerous && <span className={cx('status')}>⚠ Опасен</span>}
      </div>
      <Link href={`/${id}`} className={cx('link')} />
    </div>
  );
};

export default Card;
