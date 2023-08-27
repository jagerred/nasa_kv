import { Passion_One } from 'next/font/google';

import { bindStyles } from '@/helpers/bindStyles';

import styles from './Header.module.css';

const font = Passion_One({ subsets: ['latin'], weight: ['400'] });

const cx = bindStyles(styles);

const Header = () => {
  return (
    <header className={cx('container')}>
      <h2 className={cx('title', font.className)}>ARMAGEDDON 2023</h2>
      <span className={cx('subtitle')}>
        ООО “Команда им. Б. Уиллиса”.
        <br />
        Взрываем астероиды с 1998 года.
      </span>
    </header>
  );
};

export default Header;
