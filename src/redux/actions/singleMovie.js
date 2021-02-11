import * as actionType from "../types/singleMovie";

//SINGLE MOVIE
export const singleMovieRequest = (id) => ({
  type: actionType.SINGLE_MOVIE_REQUEST,
  id,
});
export const singleMovieRecieve = (payload) => ({
  type: actionType.SINGLE_MOVIE_RECIEVE,
  payload,
});
