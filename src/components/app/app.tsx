import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import { AppRoute } from '../../const';

type AppProps = {
  offersNumber: number;
  userName: string;
  favoritesNumber: number;
}

function App({offersNumber, userName, favoritesNumber}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offersNumber={offersNumber} userName={userName} favoritesNumber={favoritesNumber} />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
