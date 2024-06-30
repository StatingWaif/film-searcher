import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";
import searchReducer from "./searchSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    search: searchReducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
