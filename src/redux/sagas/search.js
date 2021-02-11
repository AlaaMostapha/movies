import { call, put } from "redux-saga/effects";
import { searchForMovie } from "../../network/apis/search";
import { searchForMovieRecieve } from "../actions/search";
function* handleSearch(action) {
  const response = yield call(searchForMovie, action.query);
  yield put(searchForMovieRecieve(response.data));
}

export { handleSearch };
