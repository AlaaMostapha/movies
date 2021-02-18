import * as actionType from "../types/movies";

//MOVIES
export const moviesRequest = () => ({
  type: actionType.MOVIES_REQUEST,
});
export const moviesRecieve = (payload) => ({
  type: actionType.MOVIES_RECIEVE,
  payload,
});
//GENRES
export const genresRequest = () => ({
  type: actionType.GENRES_REQUEST,
});
export const genresRecieve = (payload) => ({
  type: actionType.GENRES_RECIEVE,
  payload,
});
//UPLOAD IMG
export const uploadImg = (payload) => ({
  type: actionType.UPLOAD_IMG,
  payload,
});
