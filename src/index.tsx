import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { App } from './components/app/app';
import { /*offers,*/ detailedOffers, offersNearby/*, SELECTED_CITY*/ } from './mocks/mock-offers';
import { reviews } from './mocks/mock-reviews';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        detailedOffers={detailedOffers}
        offersNearby={offersNearby}
        reviews={reviews}
        //city={SELECTED_CITY}
      />
    </Provider>
  </React.StrictMode>
);
