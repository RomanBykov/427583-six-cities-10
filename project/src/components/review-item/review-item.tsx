import { Review } from '../../types/types';
import { RatingWidth } from '../../const';

type ReviewItemProps = {
  reviewItem: Review;
}

export default function ReviewItem({ reviewItem }: ReviewItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewItem.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {reviewItem.author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ 'width': `${RatingWidth[reviewItem.rating]}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewItem.text}
        </p>
        <time className="reviews__time" dateTime={reviewItem.date}>April 2019</time>
      </div>
    </li>
  );
}
