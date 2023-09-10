import { createAction } from '@reduxjs/toolkit';
import { Offer, DetailedOffer } from '../types/offer-type';
import { Review } from '../types/review-type';
import { AppRoute, AuthorizationStatus } from '../const';
//import { UserData } from '../types/user-data';

export const selectCity = createAction('selectCity', (selectedCityName: string) => ({
  payload: selectedCityName
}));

export const changeSortOption = createAction('changeSortOption', (sortOption: string) => ({
  payload: sortOption
}));

export const loadOffers = createAction('loadOffers', (offers: Offer[]) => ({
  payload: offers
}));

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

export const loadDetailedOffer = createAction('loadDetailedOffer', (detailedOffer: DetailedOffer) => ({
  payload: detailedOffer
}));

export const setDetailedOfferLoadingStatus = createAction<boolean>('setDetailedOfferDataLoadingStatus');

export const loadReviews = createAction('loadReviews', (reviews: Review[]) => ({
  payload: reviews
}));

export const setReviewsLoadingStatus = createAction<boolean>('setReviewsLoadingStatus');

export const loadOffersNearby = createAction('loadOffersNearby', (offers: Offer[]) => ({
  payload: offers
}));

export const setOffersNearbyLoadingStatus = createAction<boolean>('setOffersNearbyLoadingStatus');

export const setCommentSendingStatus = createAction<boolean>('setCommentSendingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');


/*const setUserInfo = createAction('setUserInfo', (userInfo: UserData | null) => ({
  payload: userInfo
}));*/

