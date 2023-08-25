import { createReducer } from '@reduxjs/toolkit';
import { selectCity, getOffers, changeSortOption, loadOffers, setOffersLoadingStatus } from './action';
import { DEFAULT_CITY, SortOption } from '../const';
import { Offer } from '../types/offer-type';
//import { offers } from '../mocks/mock-offers';

type InitialStateType = {
  city: string;
  offers: Offer[];
  sortOption: string;
  areOffersLoading: boolean;
}

const initialState: InitialStateType = {
  city: DEFAULT_CITY,
  //offers: offers,
  offers: [],
  sortOption: SortOption.Popular,
  areOffersLoading: false

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(changeSortOption, (state, action) => {
      state.sortOption = action.payload;
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(setOffersLoadingStatus, (state, action) => {
      state.areOffersLoading = action.payload;
    });
});

export { reducer };
