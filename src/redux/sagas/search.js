import { call, put } from "redux-saga/effects";
import { searchForMovie } from "../../network/apis/search";
import { moviesRecieve } from "../actions/movies";
function* handleSearch(action) {
  try {
    const response = yield call(searchForMovie, action.query);
    yield put(moviesRecieve(response.data));
  } catch (err) {}
}

export { handleSearch };
