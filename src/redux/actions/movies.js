import * as actionType from "../types/movies";

//MOVIES
export const moviesRequest = () => ({
  type: actionType.MOVIES_REQUEST,
});
export const moviesRecieve = (payload) => ({
  type: actionType.MOVIES_RECIEVE,
  payload,
});
