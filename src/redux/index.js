import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { profileApi } from "./profileQuery";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
});

export default store;
