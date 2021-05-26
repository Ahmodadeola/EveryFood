import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    fullname: "",
    email: "",
    profilePic: null,
    gender: "",
    id: null,
  },
  token: {},
  loading: false,
  error: "",
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state, { data }) {
      return;
    },
    signup(state, { data }) {
      return;
    },
    resetPassword(state, { data }) {
      return;
    },
  },
});

const { reducer, actions } = AuthSlice;

export default reducer;
