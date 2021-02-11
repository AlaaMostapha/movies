//reducer(action,state) //return update state

import * as actionType from "../types/singleMovie";
export default function singleMovieReducer(state = {}, action) {
  switch (action.type) {
    case actionType.SINGLE_MOVIE_REQUEST: {
      return {
        ...state,
      };
    }
    case actionType.SINGLE_MOVIE_RECIEVE: {
      return {
        singleMovie: action.payload,
      };
    }
    default:
      return state;
  }
}
