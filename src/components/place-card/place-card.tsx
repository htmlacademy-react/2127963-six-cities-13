import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Offer } from '../../types/offer-type';
import { Rating } from '../../const';
import { AppRoute } from '../../const';

type PlaceCardProps = {
  offer: Pick<Offer, 'id' | 'type' | 'title' | 'price' | 'rating' | 'previewImage' | 'isFavorite'>;}

function PlaceCard({offer}: PlaceCardProps) {
  const { id, type, title, price, rating, previewImage, isFavorite } = offer;

  const offerRating = rating * Rating.Percent / Rating.Divisor;

  const [, setActiveCardId] = useState('');

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => {
        setActiveCardId(id);
      }}
      onMouseLeave={() => {
        setActiveCardId('');
      }}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          {isFavorite
            ?
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
            :
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>}

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
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { PlaceCard };
