import { NearEarthObjects } from '@/types/astreoids';

export const createAsteroidsArray = (asteroidsData: NearEarthObjects) => {
  return Object.values(asteroidsData).flat();
};
