import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userslice",
  initialState: {
    user:null,
  },
  reducers: {
    onLogIn: (state,action) => {
      state.user = action.payload;
    },
    onLogOut:(state)=>{
        state.user=null;
    }
  },
});
export const { onLogIn,onLogOut } = userSlice.actions;
export default userSlice.reducer;
