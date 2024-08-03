import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedCoin: null,
  coinData: [],
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
    setCoinData: (state, { payload }) => {
      console.log(payload);
      return { ...state, coinData: payload };
    },
    resetState: (state) => {
      // console.log(state);
      return { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateList, selectCoin, setCoinData, resetState } =
  CoinsReducer.actions;

export default CoinsReducer.reducer;
