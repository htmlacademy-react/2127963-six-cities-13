import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/app/app';
import { Setting } from './const';
import { offers } from './mocks/mock-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersNumber={Setting.OffersNumber}
      offers={offers}
    />
  </React.StrictMode>
);
