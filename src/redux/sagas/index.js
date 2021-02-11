import { takeLatest, all, call } from "redux-saga/effects";
import { handleGetMovies } from "./movies";
import { handleSearch } from "./search";
import { handleGetSingleMovie } from "./singleMovie";
import * as moviesActionType from "../types/movies";
import * as movieActionType from "../types/singleMovie";
import * as searchActionType from "../types/search";
function* watchAll() {
  yield all([
    takeLatest(moviesActionType.MOVIES_REQUEST, handleGetMovies),
    takeLatest(movieActionType.SINGLE_MOVIE_REQUEST, handleGetSingleMovie),
    takeLatest(searchActionType.SEARCH_MOVIE_REQUEST, handleSearch),
  ]);
}

export default watchAll;
