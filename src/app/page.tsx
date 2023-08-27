'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

import Cart from '@/components/Cart/Cart';
import List from '@/components/List/List';
import MetricaSwitch from '@/components/MetricaSwitch/MetricaSwitch';
import { bindStyles } from '@/helpers/bindStyles';
import { createAsteroidsArray } from '@/helpers/createAsteroidsArray';
import { Asteroid, AsteroidsData } from '@/types/astreoids';

import styles from './page.module.css';

const cx = bindStyles(styles);

export default function Home() {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [extraLoading, setExtraLoading] = useState<boolean>(false);
  const [nextLink, setNextLink] = useState<string>('');

  useEffect(() => {
    const getAsteroids = async () => {
      const { data }: { data: AsteroidsData } = await axios(
        `https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const asteroidsData = createAsteroidsArray(data.near_earth_objects);

      setAsteroids(asteroidsData);
      setNextLink(data.links.next + '/');
      setLoading(false);
    };

    getAsteroids();
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    const getAsteroidsByScroll = async () => {
      if (extraLoading) {
        const { data } = await axios(nextLink);
        const asteroidsData = createAsteroidsArray(data.near_earth_objects);
        setAsteroids([...asteroids, ...asteroidsData]);
        setNextLink(data.links.next + '/');
        setExtraLoading(false);
      }
    };
    getAsteroidsByScroll();
  }, [extraLoading]);

  const scrollHandler = () => {
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = document.documentElement.scrollTop + window.innerHeight;
    if (fullHeight - scrolled < 100) {
      setExtraLoading(true);
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('main')}>
        <MetricaSwitch />
        {loading ? <h2 className={cx('loading')}>Загрузка...</h2> : <List asteroids={asteroids} />}
        {extraLoading && <h2>Подзагрузка...</h2>}
      </div>
      <Cart />
    </div>
  );
}
