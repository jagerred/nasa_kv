import { bindStyles } from '@/helpers/bindStyles';

import styles from './Footer.module.css';

const cx = bindStyles(styles);

const Footer = () => {
  return (
    <footer className={cx('container')}>
      <span className={cx('title')}>© Все права и планета защищены</span>
    </footer>
  );
};

export default Footer;
