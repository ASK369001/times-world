import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import countryReducer from "./reducers/countrySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    country: countryReducer,
  },
});
