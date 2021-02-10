//reducer(action,state) //return update state

import * as actionType from "../actionTypes";
export default function moviesReducer(state = {}, action) {
  switch (action.type) {
    case actionType.MOVIES_REQUEST: {
      return {
        ...state,
      };
    }
    case actionType.MOVIES_RECIEVE: {
      return {
        movies: action.payload,
      };
    }
    //search
    case actionType.SEARCH_MOVIE_REQUEST: {
      return {
        ...state,
      };
    }
    case actionType.SEARCH_MOVIE_RECIEVE: {
      return {
        searchMovie: action.payload,
      };
    }
    default:
      return state;
  }
}
