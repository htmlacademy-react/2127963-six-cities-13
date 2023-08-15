import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { MouseEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { MainEmpty } from '../main-empty/main-empty';
import { Map } from '../../components/map/map';
import { OfferList } from '../../components/offer-list/offer-list';
import { CityList } from '../../components/city-list/citiy-list';
import { Sorting } from '../../components/sorting/sorting';
//import { CITIES } from '../../const';
import { selectCity } from '../../store/action';
import { Offer/*, City*/ } from '../../types/offer-type';


function MainPage() {
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

  if (!offersByCity.length) {
    return (
      <MainEmpty />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">5</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList selectedCity={selectedCityName} onCityClick={handleCityClick}/>
          </section>
        </div>
        <div className="cities">
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
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainPage };
