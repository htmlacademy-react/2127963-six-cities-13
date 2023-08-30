import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer-type';
import { AppRoute, AuthorizationStatus } from '../const';
//import { UserData } from '../types/user-data';

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

const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

const redirectToRoute = createAction<AppRoute>('redirectToRoute');

const setError = createAction<string | null>('setError');

/*const setUserInfo = createAction('setUserInfo', (userInfo: UserData | null) => ({
  payload: userInfo
}));*/

export { setError, selectCity, getOffers, changeSortOption, loadOffers, setOffersLoadingStatus, requireAuthorization, redirectToRoute/*, setUserInfo*/ };
