import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import cn from 'classnames';

import { Offer } from '../../types/offer-type';
import { Rating } from '../../const';
import { AppRoute } from '../../const';

type PlaceCardProps = {
  offer: Pick<Offer, 'id' | 'type' | 'title' | 'price' | 'rating' | 'previewImage' | 'isFavorite'>;
  handleOfferHover: (evt: MouseEvent<HTMLElement>) => void;
  handleOfferLeave: (evt: MouseEvent<HTMLElement>) => void;
  isCitiesCard: boolean;
  isNearbyPlaceCard: boolean;
}

function PlaceCard({ offer, isCitiesCard, isNearbyPlaceCard, handleOfferHover, handleOfferLeave }: PlaceCardProps) {
  const { id, type, title, price, rating, previewImage, isFavorite } = offer;

  const offerRating = rating * Rating.Percent / Rating.Divisor;

  return (
    <article
      className={cn(
        'place-card',
        {'cities__card': isCitiesCard},
        {'near-places__card': isNearbyPlaceCard}
      )}
      id={id}
      onMouseEnter={handleOfferHover}
      onMouseLeave={handleOfferLeave}
    >
      <div
        className={cn(
          'place-card__image-wrapper',
          {'cities__image-wrapper': isCitiesCard},
          {'near-places__image-wrapper': isNearbyPlaceCard}
        )}
      >
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
