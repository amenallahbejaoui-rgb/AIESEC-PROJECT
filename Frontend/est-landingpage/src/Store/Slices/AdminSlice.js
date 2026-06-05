import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    inAdmin: false,
  },
  reducers: {
    changeInAdmin: (state, action) => {
      state.inAdmin = action.payload;
    },
  },
});

export const { changeInAdmin } = AdminSlice.actions;

export const selectAdmin = (state) => state.admin;

export default AdminSlice.reducer;
