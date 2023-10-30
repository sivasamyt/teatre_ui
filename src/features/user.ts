import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CounterState {
  mail: string;
  pwd: string;
  auth: any;
}
const initialState: CounterState = {
  mail: "",
  pwd: "",
  auth: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      {
        state.mail = action.payload;
        state.pwd = action.payload;
        state.auth = action.payload;
      }
    },
  },
});

export const { login } = userSlice.actions;

export const users = (state: RootState) => state.user;

export default userSlice.reducer;
