import { Link } from 'react-router-dom';
import { Rating, Accomodation } from '../../const';
import { AppRoute } from '../../const';

type FavoriteCardProps = {
  id: string;
  type: string;
  title: string;
  price: number;
  rating: number;
  previewImage: string;
  isPremium: boolean;
}

type AccomodationType = 'apartment' | 'room' | 'house' | 'hotel'

function getAccomodationType (accomodationType: AccomodationType) {
  return Accomodation[accomodationType];
}

function FavoriteCard({ id, type, title, price, rating, previewImage, isPremium }: FavoriteCardProps) {

  const accomodationType = getAccomodationType(type as AccomodationType);

  const offerRating = rating * Rating.Percent / Rating.Divisor;

  return (

    <article className="favorites__card place-card">
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt={title}
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offerRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{accomodationType}</p>
      </div>
    </article>
  );
}

export { FavoriteCard };
