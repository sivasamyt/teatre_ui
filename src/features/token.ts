import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface TokenState {
  authToken: any;
}
const initialState: TokenState = {
  authToken: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    tokenGet: (state, action: PayloadAction<any>) => {
      {
        state.authToken = action.payload;
      }
    },
  },
});

export const { tokenGet } = tokenSlice.actions;

export const tokens = (state: RootState) => state.token;

export default tokenSlice.reducer;
