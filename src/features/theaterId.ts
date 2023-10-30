import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface theaterState {
  id: { id: number; name: string };
}
const initialState: theaterState = {
  id: { id: 0, name: "" },
};

export const theaterSlice = createSlice({
  name: "theaterId",
  initialState,
  reducers: {
    idSet: (state, action: PayloadAction<any>) => {
      {
        state.id = action.payload;
        // state.movieName = action.payload;
      }
    },
  },
});

export const { idSet } = theaterSlice.actions;

export const theaterIds = (state: RootState) => state.theaterId;

export default theaterSlice.reducer;
