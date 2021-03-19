import axios from "axios";
import { API_URL } from "../../config";

// { type, payload } regular actions
// function type => thunks => we can do async and dispatch other stuff also

const setLoading = () => ({ type: "user/loading" });

const setToken = (jwt) => ({ type: "user/setToken", payload: jwt });

const loginSuccess = (profile, token) => ({
  type: "user/loginSuccess",
  payload: { profile, token },
});

export const logout = () => ({ type: "user/logout" });

export const signUp = (name, email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    console.log("thunk", name, email, password);
    dispatch(setLoading());

    const response = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });

    console.log("sign up success!");

    history.push("/login"); // send them to homepage
  } catch (e) {
    console.log(e.message);
  }
};

export const login = (email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(setLoading());

    const response = await axios.post(`${API_URL}/login`, { email, password });

    const token = response.data.jwt;

    console.log("Login success!");

    const userProfileResponse = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const profile = userProfileResponse.data;

    //dispatch(setToken(token));
    dispatch(loginSuccess(profile, token));
    history.push("/");
  } catch (e) {
    console.log(e.message);
  }
};
