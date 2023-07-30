const Setting = {
  OffersNumber: 5,
} as const;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

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

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export { Setting, CITIES, AppRoute, AuthorizationStatus, Accomodation, Rating, URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
