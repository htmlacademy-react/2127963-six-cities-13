import { humanizeDate } from '../../utils';

type ReviewProps = {
  user: string;
  rating: number;
  comment: string;
  date: string;
  avatarUrl: string;
}
function ReviewItem ({ user, rating, comment, date, avatarUrl }: ReviewProps) {
  const reviewDate = humanizeDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {reviewDate}
        </time>
      </div>
    </li>
  );
}

export { ReviewItem };
