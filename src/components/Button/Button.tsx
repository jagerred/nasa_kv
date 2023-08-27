import { ReactNode } from 'react';

import { bindStyles } from '@/helpers/bindStyles';

import styles from './Button.module.css';

type ButtonSize = 'small' | 'big';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  size?: ButtonSize;
  children: ReactNode;
  secondary?: boolean;
  bright?: boolean;
}
const cx = bindStyles(styles);
const Button = ({
  disabled = false,
  size = 'small',
  onClick,
  children,
  secondary = false,
  bright = false
}: Props) => {
  return (
    <button
      className={cx('button', {
        small: size === 'small',
        big: size === 'big',
        secondary,
        bright
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
