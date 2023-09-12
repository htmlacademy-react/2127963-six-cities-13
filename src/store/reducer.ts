import { createReducer } from '@reduxjs/toolkit';
import { selectCity, changeSortOption, loadOffers, loadDetailedOffer, loadOffersNearby, setOffersLoadingStatus, setDetailedOfferLoadingStatus, setOffersNearbyLoadingStatus, loadReviews, setReviewsLoadingStatus, setCommentSendingStatus, requireAuthorization } from './action';
import { DEFAULT_CITY, SortOption, AuthorizationStatus } from '../const';
import { Offer, DetailedOffer } from '../types/offer-type';
import { Review } from '../types/review-type';

type InitialStateType = {
  city: string;
  offers: Offer[];
  sortOption: string;
  areOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  detailedOffer: DetailedOffer | null;
  offersNearby: Offer[];
  reviews: Review[];
  isDetaildOfferLoading: boolean;
  areOffersNearbyLoading: boolean;
  areReviewsLoading: boolean;
  isCommentSending: boolean;
}

const initialState: InitialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  sortOption: SortOption.Popular,
  areOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  detailedOffer: null,
  offersNearby: [],
  reviews: [],
  isDetaildOfferLoading: false,
  areOffersNearbyLoading: false,
  areReviewsLoading: false,
  isCommentSending: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(changeSortOption, (state, action) => {
      state.sortOption = action.payload;
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(setOffersLoadingStatus, (state, action) => {
      state.areOffersLoading = action.payload;
    })

    .addCase(loadDetailedOffer, (state, action) => {
      state.detailedOffer = action.payload;
    })

    .addCase(setDetailedOfferLoadingStatus, (state, action) => {
      state.isDetaildOfferLoading = action.payload;
    })

    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })

    .addCase(setOffersNearbyLoadingStatus, (state, action) => {
      state.areOffersNearbyLoading = action.payload;
    })

    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })

    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.areReviewsLoading = action.payload;
    })

    .addCase(setCommentSendingStatus, (state, action) => {
      state.isCommentSending = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
