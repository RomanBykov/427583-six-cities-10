import { City } from './types/types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const REVIEW_MIN_LENGTH = 50;

export const RatingWidth = {
  0: 0,
  1: 20,
  2: 40,
  3: 60,
  4: 80,
  5: 100
};

export const MAX_NEAR_PLACES_VISIBLE = 3;

export const AMSTERDAM: City = {
  title: 'Amsterdam',
  lat: 52.377956,
  lng: 4.897070,
  zoom: 12,
};
