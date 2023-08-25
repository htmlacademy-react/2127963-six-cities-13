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

const loadOffers = createAction('loadOffers', (offers: Offer[]) => ({
  payload: offers
}));

const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

export { selectCity, getOffers, changeSortOption, loadOffers, setOffersLoadingStatus };
