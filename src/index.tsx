import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/app/app';
import { Setting } from './const';
import { offers, detailedOffers, offersNearby, SELECTED_CITY } from './mocks/mock-offers';
import { reviews } from './mocks/mock-reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersNumber={Setting.OffersNumber}
      offers={offers}
      detailedOffers={detailedOffers}
      offersNearby={offersNearby}
      reviews={reviews}
      city={SELECTED_CITY}
    />
  </React.StrictMode>
);
