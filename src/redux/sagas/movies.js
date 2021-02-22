import { call, put } from "redux-saga/effects";
import { getLastestMovies, getGenres } from "../../network/apis/movies";
import { postImage } from "../../network/apis//images";
import {
  moviesRecieve,
  genresRecieve,
  addNewMovieRecieve,
} from "../actions/movies";
import history from "../../routes/history";
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
  try {
    yield call(postImage, action.payload);
  } catch (err) {
    console.log("saga err", err);
  }
}
function* handleAddNewMovie(action) {
  try {
    const response = action.payload;
    console.log("response", response);
    // if (response) {
    //   history.push("/movies");
    // }
  } catch (err) {}
}
export { handleGetMovies, handleGetGenres, handleUploadImg, handleAddNewMovie };
