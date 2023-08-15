import dayjs from 'dayjs';
import { SortOption } from './const';
import { Offer } from './types/offer-type';

const DateFormat = {
  YYYYMMMM: 'YYYY MMMM',
};

const humanizeDate = (date: string) => date ? dayjs(date).format(DateFormat.YYYYMMMM) : '';

const sortLowToHigh = (a: Offer, b: Offer) => a.price - b.price;

const sortHighToLow = (a: Offer, b: Offer) => b.price - a.price;

const sortByRating = (a: Offer, b: Offer) => b.rating - a.rating;

const sortOffers = (offers: Offer[], sorting: string): Offer[] => {
  switch (sorting) {
    case SortOption.HighToLow:
      return offers.slice().sort(sortHighToLow);
    case SortOption.LowToHigh:
      return offers.slice().sort(sortLowToHigh);
    case SortOption.TopRatedFirst:
      return offers.slice().sort(sortByRating);
    default:
      return offers;
  }
};

//const getOffersByCity = (offers: Offer[], cityName: string): Offer[] => offers.filter((offer) => offer.city.name === cityName);


export { humanizeDate, sortOffers/*, getOffersByCity*/ };
