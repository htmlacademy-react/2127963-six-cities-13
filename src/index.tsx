import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { App } from './components/app/app';
import { /*offers,*/ detailedOffers, offersNearby/*, SELECTED_CITY*/ } from './mocks/mock-offers';
import { reviews } from './mocks/mock-reviews';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        detailedOffers={detailedOffers}
        offersNearby={offersNearby}
        reviews={reviews}
        //city={SELECTED_CITY}
      />
    </Provider>
  </React.StrictMode>
);
