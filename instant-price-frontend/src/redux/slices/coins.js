import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedCoin: null,
};

export const CoinsReducer = createSlice({
  name: "coins",
  initialState,
  reducers: {
    updateList: (state, { payload }) => {
      return { ...state, list: payload };
    },
    selectCoin: (state, { payload }) => {
      const selectedCoin = state.list.find((coin) => coin.name === payload);
      return { ...state, selectedCoin: selectedCoin };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateList, selectCoin } = CoinsReducer.actions;

export default CoinsReducer.reducer;
