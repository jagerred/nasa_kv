import Link from 'next/link';
import { useContext } from 'react';

import { CartContext } from '@/context/Cart';
import { bindStyles } from '@/helpers/bindStyles';

import Button from '../Button/Button';

import styles from './Cart.module.css';

const cx = bindStyles(styles);

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <section className={cx('container')}>
      <div className={cx('info')}>
        <h3 className={cx('title')}>Корзина</h3>
        <span className={cx('text')}>{cart.length} астероида</span>
      </div>
      <Button size='big' bright>
        <Link href='/order'>Отправить</Link>
      </Button>
    </section>
  );
};

export default Cart;
