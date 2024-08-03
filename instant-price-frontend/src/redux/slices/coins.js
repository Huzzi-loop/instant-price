import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const CoinsReducer = createSlice({
  name: "coins",
  initialState,
  reducers: {
    updateList: (state, { payload }) => {
      return { ...state, list: payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateList } = CoinsReducer.actions;

export default CoinsReducer.reducer;
