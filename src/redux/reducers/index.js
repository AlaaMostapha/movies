import { combineReducers } from "redux";
import moviesReducer from "./movies";
import singleMovieReducer from "./singleMovie";
const rootReducers = combineReducers({
  moviesReducer,
  singleMovieReducer,
});

export default rootReducers;
