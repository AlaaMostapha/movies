import { call, put } from "redux-saga/effects";
import { getLastestMovies } from "../../network/apis/movies";
import { moviesRecieve } from "../actions/movies";

function* handleGetMovies() {
  try {
    const response = yield call(getLastestMovies);
    yield put(moviesRecieve(response.data));
  } catch (err) {}
}

export { handleGetMovies };
