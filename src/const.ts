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

const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer'
} as const;

const Accomodation = {
  'apartment': 'Apartment',
  'room': 'Private Room',
  'house':'House',
  'hotel':'Hotel'
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown:'UNKNOWN',
} as const;

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

export { CITIES, DEFAULT_CITY, SortOption, AppRoute, AuthorizationStatus, Accomodation, Rating, URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
