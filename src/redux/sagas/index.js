import { takeEvery, all } from "redux-saga/effects";
import { handleGetMovies, handleSearch } from "./movies";
import { handleGetSingleMovie } from "./singleMovie";

import * as actionTypes from "../actionTypes";
function* watchAll() {
  yield all([takeEvery(actionTypes.MOVIES_REQUEST, handleGetMovies)]);
  yield all([
    takeEvery(actionTypes.SINGLE_MOVIE_REQUEST, handleGetSingleMovie),
  ]);
  yield all([takeEvery(actionTypes.SEARCH_MOVIE_REQUEST, handleSearch)]);
}

export default watchAll;
