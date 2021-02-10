import { call, put } from "redux-saga/effects";
import { getLastestMovies } from "../../network/apis/movies";
import { searchForMovie } from "../../network/apis/searchForMovieName";
import { moviesRecieve } from "../actions/movies";
import { searchForMovieRecieve } from "../actions/search";

function* handleGetMovies(action) {
  const response = yield call(getLastestMovies);
  yield put(moviesRecieve(response.data));
}

function* handleSearch(action) {
  const response = yield call(searchForMovie, action.query);
  yield put(searchForMovieRecieve(response.data));
}

export { handleGetMovies, handleSearch };
