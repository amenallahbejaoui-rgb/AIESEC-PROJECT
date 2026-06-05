import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    logged: false,
    token: "",
    apiEndpoint: "",
    data: {},
  },
  reducers: {
    changeLogged: (state, action) => {
      state.logged = action.payload;
    },
    changeToken: (state, action) => {
      state.token = action.payload;
    },
    changeEndpoint: (state, action) => {
      state.apiEndpoint = action.payload;
    },
  },
});

export const { changeLogged, changeToken, changeData } = AuthSlice.actions;

export const selectLogged = (state) => state.logged;
export const selectToken = (state) => state.token;
export const selectRtoken = (state) => state.rtoken;

export default AuthSlice.reducer;
