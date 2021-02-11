import { combineReducers } from "redux";
import moviesReducer from "./movies";
import singleMovieReducer from "./singleMovie";
import searchReducer from "./search";
const rootReducers = combineReducers({
  moviesReducer,
  singleMovieReducer,
  searchReducer,
});

export default rootReducers;
