import { combineReducers } from "@reduxjs/toolkit";
import React from "react";
import usersReducer from "./user";
import tokensReducer from "./token";
import pathReducer from "./path";
import theaterReducer from "./theaterId";


const RootReducer = combineReducers({
  user: usersReducer,
  token: tokensReducer,
  path: pathReducer,
  theaterId:theaterReducer,
});

const combinedReducers = (state: any, action: any) => {
  if (action.type === "logout") {
    state = undefined;
    localStorage.clear();
  }

  return RootReducer(state, action);
};

export default combinedReducers;

export const logout = () => ({
  type: "logout",
});
