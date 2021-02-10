import { call, put } from "redux-saga/effects";
import { getSingleMovie } from "../../network/apis/singleMovie";
import { singleMovieRecieve } from "../actions/singleMovie";

function* handleGetSingleMovie(action) {
  const response = yield call(getSingleMovie, action.id);
  yield put(singleMovieRecieve(response.data));
}

export { handleGetSingleMovie };
