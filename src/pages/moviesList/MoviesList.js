import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as moviesActions from "../../redux/actions/movies";
import * as searchActions from "../../redux/actions/search";
import Btn from "../../components/btn/Btn";
import MovieCard from "../../components/card/Card";
import history from "../../routes/history";
import "./MoviesList.scss";
const MoviesList = () => {
  const [expand, setExpand] = React.useState(false);
  const dispatch = useDispatch();
  const {
    moviesReducer: { movies },
    searchReducer: { searchMovie },
  } = useSelector((state) => state);
  useEffect(() => {
    //when component mount get allmovies
    dispatch(moviesActions.moviesRequest());
  }, []);

  const defaultValues = {
    search: "",
  };
  const { handleSubmit, register } = useForm({
    mode: "onSubmit",
    defaultValues: defaultValues,
  });
  const onSubmit = (values) => {
    dispatch(searchActions.searchForMovieRequest(values.search));
  };
  const handleInputChange = (e) => {
    if (e.target.value === "") {
      dispatch(moviesActions.moviesRequest());
    }
  };

  const createList = () => {
    if (movies) {
      return movies.results.map((movie, index) => {
        return (
          <div
            className="col-md-3 col-sm-6 mb-4 moive-col"
            onClick={() => history.push(`/movies/${movie.id}`)}
            key={index}
          >
            <MovieCard
              img={movie.poster_path}
              title={movie.title}
              rate={movie.vote_average}
            />
          </div>
        );
      });
    }
  };
  const handleInputAnimation = (e) => {
    //expand & focus input
    document.getElementById("search").setAttribute("aria-expanded", "true");
    document.getElementById("search").focus();
  };
  const focusOutHandle = () => {
    //collapse & focus input
    document.getElementById("search").setAttribute("aria-expanded", "false");
    document.getElementById("search").blur();
  };
  return (
    <div className="container mt-3">
      <form
        className="moviesLitForm"
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => handleInputAnimation(e)}
      >
        <div className="input-icon">
          <i className="fa fa-search icon"></i>
          <input
            type="search"
            name="search"
            placeholder="search for a movie..."
            onChange={(e) => handleInputChange(e)}
            ref={register}
            id="search"
            aria-expanded="false"
            onBlur={() => focusOutHandle()}
          />
        </div>
        <input type="submit" className="SubmitBtn" />
      </form>
      <div className="row mt-2">
        <div className="col-9">
          <p className="moviesFirstHead">popular</p>
          <p className="moviesSecondHead">movie</p>
        </div>
        <div className="col-3 text-right">
          <Btn
            text="Add New Movie"
            href="/AddNewMovie"
            className="generalBtn"
          />
          {/* <button>Add New Movie</button> */}
        </div>
      </div>
      <div className="row">{createList()}</div>
    </div>
  );
};

export default MoviesList;
