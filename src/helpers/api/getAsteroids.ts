import axios from 'axios';

import { Asteroid } from '@/types/astreoids';

export const getAsteroids = async (id: string) => {
  const { data }: { data: Asteroid } = await axios(
    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return data;
};
