import {socialProof} from '../data/social-proof';
import type {ImageSourcePropType} from 'react-native';

export interface CardType {
  id: number;
  title: string;
  poster: ImageSourcePropType;
  detail?: string;
  cover?: string;
}

export const list: CardType[] = [
  {
    id: 1,
    title: '社会认同',
    poster: require('../assets/poster/social-proof.png'),
    cover: require('../assets/poster/test-poster.png'),
    detail: socialProof,
  },
  {
    id: 2,
    title: '好奇心',
    poster: require('../assets/poster/curiosity.png'),
  },
  {
    id: 3,
    title: '模式识别',
    poster: require('../assets/poster/pattern.png'),
  },
  {
    id: 4,
    title: '峰值定律',
    poster: require('../assets/poster/peak-end-rule.png'),
  },
];
