import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./slices/darkmodeSlice";
import artistReducer from "./slices/artistDataSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    artist: artistReducer,
  },
});

export const getRootState = () => store.getState();
export const AppDispatch = store.dispatch;