import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface pathState {
  pathLink: any;
}
const initialState: pathState = {
  pathLink: "",
};

export const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    pathSet: (state, action: PayloadAction<any>) => {
      {
        state.pathLink = action.payload;
      }
    },
  },
});

export const { pathSet } = pathSlice.actions;

export const paths = (state: RootState) => state.path;

export default pathSlice.reducer;
