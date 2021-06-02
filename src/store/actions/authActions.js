import actions, { startLoad } from "../reducers/authSlice";

export const signup = (data) => (dispatch) => {
  dispatch(startLoad());
};

export const login = (data) => (dispatch) => {
  dispatch(startLoad());
};

export const resetPassword = (data) => (dispatch) => {
  dispatch(startLoad());
};
