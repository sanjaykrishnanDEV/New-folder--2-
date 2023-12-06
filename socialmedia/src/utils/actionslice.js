import { createSlice } from "@reduxjs/toolkit";

const actionSlice = createSlice({
  name: "actionslice",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});
export const { toggleMenu } = actionSlice.actions;
export default actionSlice.reducer;
