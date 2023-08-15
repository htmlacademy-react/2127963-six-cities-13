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

/*const sortingOptions = [
  {
    sortingType: 'popular',
    sortingName: 'Popular'
  },
  {
    sortingType: 'lowToHigh',
    sortingName: 'Price: low to high'
  },
  {
    sortingType: 'highToLow',
    sortingName: 'Price: high to low'
  },
  {
    sortingType: 'topRatedFirst',
    sortingName: 'Top rated first'
  },
];*/

//const DEFAULT_SORT_TYPE = 'Popular';

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export { CITIES, DEFAULT_CITY/*, DEFAULT_SORT_TYPE,*/, SortOption, AppRoute, AuthorizationStatus/*, sortingOptions,*/, Accomodation, Rating, URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
