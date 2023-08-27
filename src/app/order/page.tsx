'use client';
import { useContext } from 'react';

import List from '@/components/List/List';
import { CartContext } from '@/context/Cart';
import { bindStyles } from '@/helpers/bindStyles';

import styles from './order.module.css';

const cx = bindStyles(styles);

const Order = () => {
  const { cart } = useContext(CartContext);
  const titleText = cart.length > 0 ? 'Заказ отправлен!' : 'Нечего отправлять...';
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>{titleText}</h2>
      <List asteroids={cart} mode='static' />
    </div>
  );
};

export default Order;
