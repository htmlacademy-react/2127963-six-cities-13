import { ReviewItem } from '../review-item/review-item';
import { Review } from '../../types/review-type';
import { Rating } from '../../const';

type ReviewListProps = {
 reviews: Review[];
};

function ReviewList ({ reviews }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        (
          <ReviewItem
            user={review.user.name}
            rating={review.rating * Rating.Percent / Rating.Divisor}
            date={review.date}
            comment={review.comment}
            key={review.id}
            avatarUrl={review.user.avatarUrl}
          />
        ))}
    </ul>
  );
}

export { ReviewList };
