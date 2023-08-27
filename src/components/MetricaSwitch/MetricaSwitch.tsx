'use client';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';

import { Metrica, MetricaContext } from '@/context/Metrica';
import { bindStyles } from '@/helpers/bindStyles';

import styles from './MetricaSwitch.module.css';

const cx = bindStyles(styles);

interface Tab {
  metrica: Metrica;
  name: string;
}

const tabsMap: Tab[] = [
  {
    metrica: 'kilometers',
    name: 'в километрах'
  },
  {
    metrica: 'lunar',
    name: 'в лунных орбитах'
  }
];

const MetricaSwitch = () => {
  const { metrica, setMetrica } = useContext(MetricaContext);
  const tabs = tabsMap.map((tab, index) => {
    const isTabActive = tab.metrica === metrica;
    const isLastTab = index === tabsMap.length - 1;
    return (
      <>
        <button
          key={tab.metrica}
          className={cx('button', {
            active: isTabActive
          })}
          onClick={() => setMetrica(tab.metrica)}
        >
          {tab.name}
        </button>
        {!isLastTab && <span>|</span>}
      </>
    );
  });

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>Ближайшие подлёты астероидов</h2>
      <div className={cx('metrica')}>{tabs}</div>
    </div>
  );
};

export default MetricaSwitch;
