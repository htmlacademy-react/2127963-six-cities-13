const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const DEFAULT_CITY = 'Paris';

const Rating = {
  Percent: 100,
  Divisor: 5
} as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites= '/favorites',
  Offer ='/offer'
}

const Accomodation = {
  'apartment': 'Apartment',
  'room': 'Private Room',
  'house':'House',
  'hotel':'Hotel'
} as const;

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const SortOption = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first'
};

const URL_MARKER_DEFAULT =
  'img/pin.svg';

const URL_MARKER_CURRENT =
  'img/pin-active.svg';

enum APIRoute {
    Offers = '/offers',
    Login = '/login',
    Logout = '/logout',
  }


export { APIRoute, CITIES, DEFAULT_CITY, SortOption, AppRoute, AuthorizationStatus, Accomodation, Rating, URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
