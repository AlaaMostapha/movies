import { call, put } from "redux-saga/effects";
import { getLastestMovies, getGenres } from "../../network/apis/movies";
import { postImage } from "../../network/apis//images";
import { moviesRecieve, genresRecieve } from "../actions/movies";

function* handleGetMovies() {
  try {
    const response = yield call(getLastestMovies);
    yield put(moviesRecieve(response.data));
  } catch (err) {}
}
function* handleGetGenres() {
  try {
    const response = yield call(getGenres);
    yield put(genresRecieve(response.data));
  } catch (err) {}
}
function* handleUploadImg(action) {
  console.log("saga", action);
  try {
    yield call(postImage, action.payload);
  } catch (err) {}
}
export { handleGetMovies, handleGetGenres, handleUploadImg };
