import { configureStore } from "@reduxjs/toolkit";
import actionSlice from "./actionslice";
import userSlice from "./userSlice";
const appstore = configureStore({
  reducer: {
    action: actionSlice,
    user:userSlice
  },
});

export default appstore;
