import { call, put } from "redux-saga/effects";
 import { toast } from "react-toastify";
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
function* handleAddNewMovie(action) {
  try {
    //upload img
    toast.success("request is send", {
      position: "top-center",
      autoClose: 3000,
    });
    const imgUploadResponse = yield call(postImage, action.payload.poster[0]);
    if (imgUploadResponse) {
      //if img is uploaded successfully then submit (send) data
      const response = action.payload;
      //if data submitted successfully the redirect to movies page
      if (response) {
        history.push("/movies");
      }
    }
  } catch (err) {
     toast.error(err.message, { position: "top-center", autoClose: 5000 });
    console.log("saga err", err);
    console.log("err msg", err.message);
  }
}
export { handleGetMovies, handleGetGenres, handleAddNewMovie };
