export type Offer = {
  id: string;
  lat: number,
  lng: number,
  image: string;
  price: number;
  name: string;
  type: string;
  isPremium: boolean;
  rating: Rating;
}

type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}
