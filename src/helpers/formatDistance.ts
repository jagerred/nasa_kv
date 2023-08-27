import { Metrica } from '@/context/Metrica';

const metricaMap = {
  kilometers: 'км',
  lunar: 'лунных орбит'
};

interface FormatDistanceParams {
  distance: string;
  metrica: Metrica;
}

export const formatDistance = ({ distance, metrica }: FormatDistanceParams) =>
  `${Math.round(Number(distance)).toLocaleString('ru-RU')} ${metricaMap[metrica]}`;
