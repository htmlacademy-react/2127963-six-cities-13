import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';

import { MainPage } from '../../pages/main-page/main-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { PageNotFound } from '../../pages/page-not-found/page-not-found';
import { LoadingPage } from '../../pages/loading-page/loading-page';

import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRoute } from '../private-route/private-route';
import { HistoryRouter } from '../history-router/history-router';
import { browserHistory } from '../../browser-history';
import { Offers, DetailedOffer } from '../../types/offer-type';
import { Review } from '../../types/review-type';

type AppProps = {
  //offers: Offers;
  detailedOffers: DetailedOffer[];
  offersNearby: Offers;
  reviews: Review[];

};

function App({ /*offers,*/ detailedOffers, offersNearby, reviews }: AppProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offers = useAppSelector((state) => state.offers);
  const areOffersLoading = useAppSelector((state) => state.areOffersLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || areOffersLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage/>}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage detailedOffers={detailedOffers} offersNearby={offersNearby} reviews={reviews}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export { App };
