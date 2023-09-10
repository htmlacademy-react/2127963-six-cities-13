import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Map } from '../../components/map/map';
import { OfferList } from '../../components/offer-list/offer-list';
import { ReviewForm } from '../../components/review-form/review-form';
import { ReviewList } from '../../components/review-list/review-list';
//import { Review } from '../../types/review-type';
import { Offer/*, DetailedOffer*/ } from '../../types/offer-type';
import { Rating } from '../../const';
import { PageNotFound } from '../page-not-found/page-not-found';
import { LoadingPage } from '../loading-page/loading-page';
import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../const';
import { fetchDetailedOfferAction, fetchReviewsAction, fetchOffersNearbyAction } from '../../store/api-actions';


type OfferProps = {
  //detailedOffers: DetailedOffer[];
  //offersNearby: Offer[];
  //reviews: Review[];
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
}

function OfferPage({ /*detailedOffers, offersNearby, reviews,*/ authorizationStatus }: OfferProps) {


  const currentOffer = useParams();
  const selectedOffer = useAppSelector((state) => state.detailedOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const offersNearby = useAppSelector((state) => state.offersNearby);
  const isDetailedOfferLoading = useAppSelector ((state) => state.isDetaildOfferLoading);
  const areReviewsLoading = useAppSelector((state) => state.areReviewsLoading);
  const areOffersNearbyLoading = useAppSelector((state) => state.areOffersNearbyLoading);


  const OFFERS_NEARBY_TO_SHOW_NUMBER = 3;

  //const selectedOffer = detailedOffers.find((detailedOffer) => detailedOffer.id === offerToShow.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentOffer.id) {
      dispatch(fetchDetailedOfferAction(currentOffer.id));
      dispatch(fetchReviewsAction(currentOffer.id));
      dispatch(fetchOffersNearbyAction(currentOffer.id));
      //dispatch(fetchFavoritesAction());
    }
  }, [dispatch, currentOffer.id]);

  const offersNearbyToShow = offersNearby.slice(0, OFFERS_NEARBY_TO_SHOW_NUMBER);

  const [hoveredOffer, setHoveredOffer] = useState<Offer | undefined>(undefined);

  const handleOfferHover = (id: string | undefined) => {
    if (!id) {
      setHoveredOffer(undefined);
    }
    const currentOfferNearby = offersNearbyToShow.find((offerNearbyToShow) => offerNearbyToShow.id === id);

    setHoveredOffer(currentOfferNearby);
  };


  if (isDetailedOfferLoading || areReviewsLoading || areOffersNearbyLoading) {
    return (
      <LoadingPage />
    );
  }


  if (!selectedOffer){
    return <PageNotFound />;
  }

  const {
    type,
    isPremium,
    title,
    isFavorite,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city
  } = selectedOffer;

  const offerRating = rating * Rating.Percent / Rating.Divisor;
  const {name, avatarUrl, isPro} = host;

  return (
    <div className="page">
      <Helmet>
        <title>Six cities: Offer</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus}/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {selectedOffer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt={type}/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">

              {isPremium &&
              <div className="place-card__mark">
                <span>Premium</span>
              </div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>

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
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${offerRating}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (<li className="offer__inside-item" key={good}>{good}</li>))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper user__avatar-wrapper ${isPro ? 'offer__avatar-wrapper--pro' : ''}`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews}/>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={city}
              offers={offersNearbyToShow}
              selectedOffer={hoveredOffer}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferList
              offers={offersNearbyToShow}
              onOfferHover={handleOfferHover}
              isCitiesCard={false}
              isNearbyPlaceCard
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export { OfferPage };
