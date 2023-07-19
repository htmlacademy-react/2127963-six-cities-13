import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//import { CITIES } from '../../const';

import { FavoriteCard } from '../../components/favorite-card/favorite-card';
import { FavoritesEmpty } from '../favorites-empty/favorites-empty';

import { Offers } from '../../types/offer-type';

type FavoritesProps = {
 offers: Offers;
}

function FavoritesPage({ offers }: FavoritesProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  if (favoriteOffers.length === 0) {
    return(
      <FavoritesEmpty />
    );
  }

  const favoriteCities = Array.from(new Set(favoriteOffers.map((favoriteOffer) => favoriteOffer.city.name)));

  return (
    <div className="page">
      <Helmet>
        <title>Six cities: Favorites</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo"
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
                    <span className="header__favorite-count">3</span>
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {favoriteCities.map((city) => (
                <li className="favorites__locations-items" key={city}>

                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">

                    {favoriteOffers.map((favoriteOffer) => <FavoriteCard key={favoriteOffer.id} offer={favoriteOffer}/>)}

                  </div>
                </li>

              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export { FavoritesPage };
