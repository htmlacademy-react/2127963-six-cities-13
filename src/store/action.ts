import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer-type';

const selectCity = createAction('selectCity', (selectedCityName: string) => ({
  payload: selectedCityName
}));

const getOffers = createAction('getOffers', (offers: Offer[]) => ({
  payload: offers
}));

const changeSortOption = createAction('changeSortOption', (sortOption: string) => ({
  payload: sortOption
}));

export { selectCity, getOffers, changeSortOption };