import { createReducer } from '@reduxjs/toolkit';
import { selectCity, getOffers, changeSortOption } from './action';
import { DEFAULT_CITY/*, DEFAULT_SORT_TYPE, sortingOptions*/, SortOption } from '../const';
import { offers } from '../mocks/mock-offers';


const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  sortOption: SortOption.Popular
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
    });
});

export { reducer };
