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
    startLoad(state) {
      state.loading = true;
      state.error = null;
    },

    loginSuccess(state, { data }) {
      state.loading = false;
      state.userInfo = data;
    },

    loginFailed(state, { error }) {
      state.laoding = false;
      state.error = error;
    },
    signupSuccess(state, { data }) {
      state.loading = false;
    },

    signupFailed(state, { error }) {
      state.loading = false;
      state.error = error;
    },
    resetPasswordSuccess(state, { data }) {
      state.data = data;
    },

    resetPasswordFailed(state, { error }) {
      state.loading = false;
      state.error = error;
    },
  },
});

const { reducer, actions } = AuthSlice;

export const {
  startLoad,
  loginSuccess,
  loginFailed,
  signupFailed,
  signupSuccess,
  resetPasswordSuccess,
  resetPasswordFailed,
} = actions;

export default reducer;
