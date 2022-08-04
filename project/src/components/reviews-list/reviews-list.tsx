import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';
import { mockReviews } from '../../mocks/reviews';

export default function ReviewsList(): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{mockReviews?.length || 0}</span></h2>
      <ul className="reviews__list">
        {mockReviews.map((review) => (<ReviewItem key={review.id} reviewItem={review} />))}
      </ul>
      <ReviewForm />
    </section>
  );
}
