const Setting = {
  OffersNumber: 5,
  UserName: 'Oliver.conner@gmail.com',
  FavoritesNumber: 5
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

export { Setting, AppRoute, Accomodation };
