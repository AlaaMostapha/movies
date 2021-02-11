import * as actionType from "../types/search";
export default function searchReducer(state = {}, action) {
  switch (action.type) {
    //search
    case actionType.SEARCH_MOVIE_RECIEVE: {
      return {
        searchMovie: action.payload,
      };
    }
    default:
      return state;
  }
}
