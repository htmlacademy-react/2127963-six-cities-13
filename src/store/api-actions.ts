import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { DetailedOffer, Offer } from '../types/offer-type.js';
import { Review, ReviewData } from '../types/review-type.js';
import { loadOffers, loadDetailedOffer, loadOffersNearby, setOffersLoadingStatus, setDetailedOfferLoadingStatus, setOffersNearbyLoadingStatus, loadReviews, setReviewsLoadingStatus, setCommentSendingStatus, requireAuthorization, redirectToRoute/*, setUserInf*/ } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersLoadingStatus(false));
  },
);

export const fetchDetailedOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchDetailedOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDetailedOfferLoadingStatus(true));

    const {data} = await api.get<DetailedOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(loadDetailedOffer(data));
    dispatch(setDetailedOfferLoadingStatus(false));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (id, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadingStatus(true));

    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data));
    dispatch(setReviewsLoadingStatus(false));
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffersNearby',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOffersNearbyLoadingStatus(true));

    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadOffersNearby(data));
    dispatch(setOffersNearbyLoadingStatus(false));
  },
);

export const postReviewAction = createAsyncThunk<void, {reviewData: ReviewData; id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postReview',
  async ({reviewData, id}, {dispatch, extra: api}) => {
    dispatch(setCommentSendingStatus(true));
    await api.post<Review>(`${APIRoute.Comments}/${id}`, reviewData);
    dispatch(setCommentSendingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login)
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.Auth)))
      .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    //dispatch(setUserInfo(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
