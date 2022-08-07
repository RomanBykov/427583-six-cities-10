import { Review } from '../types/types';
import { genetateUniqueId } from '../utils/utils';

export const mockReviews: Review[] = [
  {
    id: genetateUniqueId(),
    author: 'Max',
    avatar: 'img/avatar-max.jpg',
    rating: 4,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
  },
  {
    id: genetateUniqueId(),
    author: 'Max',
    avatar: 'img/avatar-max.jpg',
    rating: 5,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
  },
  {
    id: genetateUniqueId(),
    author: 'Max',
    avatar: 'img/avatar-max.jpg',
    rating: 4,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
  },
  {
    id: genetateUniqueId(),
    author: 'Max',
    avatar: 'img/avatar-max.jpg',
    rating: 5,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
  },
];
