//import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { MouseEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { Map } from '../../components/map/map';
import { Header } from '../../components/header/header';
import { OfferList } from '../../components/offer-list/offer-list';
import { CityList } from '../../components/city-list/citiy-list';
import { Sorting } from '../../components/sorting/sorting';
import { selectCity } from '../../store/action';
import { Offer } from '../../types/offer-type';
import { AuthorizationStatus } from '../../const';

type MainPageProps = {
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
}

function MainPage({ authorizationStatus }: MainPageProps) {
  const dispatch = useAppDispatch();

  const offers = useAppSelector ((state) => state.offers);
  const selectedCityName = useAppSelector((state) => state.city);

  const handleCityClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (!evt.currentTarget.textContent) {
      return;
    }
    dispatch(selectCity(evt.currentTarget.textContent));
  };

  const [hoveredOffer, setHoveredOffer] = useState<Offer | undefined>(undefined);

  const handleOfferHover = (id: string | undefined) => {
    if (!id) {
      setHoveredOffer(undefined);
    }

    const currentOffer = offers.find((offer) => offer.id === id);

    setHoveredOffer(currentOffer);
  };

  const offersByCity = offers.filter((offer) => offer.city.name === selectedCityName);

  /*if (!offersByCity.length) {
    return (
      <MainEmpty/>
    );
  }*/

  const areNoOffers = offersByCity.length === 0;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList selectedCity={selectedCityName} onCityClick={handleCityClick}/>
          </section>
        </div>
        <div className="cities">
          {areNoOffers
            ?
            <MainEmpty />
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {selectedCityName}</b>
                <Sorting />
                <OfferList
                  offers={offersByCity}
                  onOfferHover={handleOfferHover}
                  isCitiesCard
                  isNearbyPlaceCard={false}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={offersByCity[0].city}
                    offers={offersByCity}
                    selectedOffer={hoveredOffer}
                  />
                </section>
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export { MainPage };
