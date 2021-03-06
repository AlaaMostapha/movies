import * as actionType from "../types/movies";
export default function moviesReducer(state = {}, action) {
  switch (action.type) {
    case actionType.MOVIES_RECIEVE: {
      return {
        movies: action.payload,
      };
    }
    case actionType.GENRES_RECIEVE: {
      return {
        genres: action.payload.genres,
      };
    }
    default:
      return state;
  }
}
