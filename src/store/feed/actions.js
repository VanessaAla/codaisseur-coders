import axios from "axios";
import { API_URL } from "../../config"; //i am importing the api from src/config.js. It is more tidy this way!

//const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  //(dispatch and getState) are my new parameters
  dispatch(startLoading());

  const offset = getState().feed.posts.length;

  const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  const morePosts = res.data.rows;

  dispatch(postsFetched(morePosts));
}

//or write them all with a surrounding function

/*export const fetchPosts = () => async (dispatch, getState) => {
  try {
    const posts = getState().feed.posts;
    console.log("getState", getState());

    if (!posts.length) {
      dispatch(startLoading());

      const response = await axios.get(`${API_URL}/posts`);

      dispatch(postsFetched(response.data.rows));
    }
  } catch (e) {
    console.log(e.message);
  }*/
