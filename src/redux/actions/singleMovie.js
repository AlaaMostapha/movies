import * as actionType from "../actionTypes";

//SINGLE MOVIE
export const singleMovieRequest = (id) => ({
  type: actionType.SINGLE_MOVIE_REQUEST,
  id,
});
export const singleMovieRecieve = (payload) => ({
  type: actionType.SINGLE_MOVIE_RECIEVE,
  payload,
});
