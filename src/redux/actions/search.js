import * as actionType from "../actionTypes";

//MOVIES
export const searchForMovieRequest = (query) => ({
  type: actionType.SEARCH_MOVIE_REQUEST,
  query,
});
export const searchForMovieRecieve = (payload) => ({
  type: actionType.SEARCH_MOVIE_RECIEVE,
  payload,
});
