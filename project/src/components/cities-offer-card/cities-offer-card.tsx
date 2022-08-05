import { MouseEvent } from 'react';
import { AppRoute } from '../../../src/const';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type OfferCardProps = {
  offer: Offer,
  onOfferHover: (offer: Offer) => void,
}

export default function CitiesOfferCard({ offer, onOfferHover }: OfferCardProps): JSX.Element {
  function offerHoverHandler(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    onOfferHover(offer);
  }

  return (
    <article className="cities__card place-card" onMouseEnter={offerHoverHandler}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place" />
        </Link>
      </div>

      <OfferCard offer={offer} />
    </article>
  );
}
