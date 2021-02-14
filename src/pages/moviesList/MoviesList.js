import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as moviesActions from "../../redux/actions/movies";
import * as searchActions from "../../redux/actions/search";
import CustomTextField from "../../components/input/customInput";
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
  const handleInputAnimation = () => {
    // console.log(
    //   "clicked",
    //   document.getElementById("search").getAttribute("aria-expanded")
    // );
    // const check = document
    //   .getElementById("search")
    //   .getAttribute("aria-expanded");
    // if (check) {
    //   setExpand(true);
    // } else {
    setExpand(true);
    // }
  };
  const createList = () => {
    if (searchMovie) {
      return searchMovie.results.map((movie, i) => {
        return (
          <div
            className="col-md-3 col-sm-6 mb-4"
            style={{ textAlign: "-webkit-center" }}
            key={i}
            onClick={() => history.push(`/movies/${movie.id}`)}
          >
            <MovieCard img={movie.poster_path} title={movie.title} movie />
          </div>
        );
      });
    } else {
      if (movies) {
        return movies.results.map((movie, index) => {
          return (
            <div
              className="col-md-3 col-sm-6 mb-4"
              onClick={() => history.push(`/movies/${movie.id}`)}
              key={index}
              style={{ textAlign: "-webkit-center" }}
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
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={() => handleInputAnimation()}
      >
        <div className="input-icons">
          <i
            className="fa fa-search icon"
            style={{ position: "absolute", padding: "5px" }}
          ></i>
          <input
            type="search"
            name="search"
            placeholder="search for a movie...."
            onChange={(e) => handleInputChange(e)}
            ref={register}
            id="search"
            aria-expanded="false"
            // className={expand ? "search-focus" : ".search-not-focus"}
          />
        </div>
        <input
          type="submit"
          style={{ position: "absolute", left: "-9999px" }}
        />
      </form>
      <div className="row">
        <div className="col-12">
          <p className="moviesFirstHead">popular</p>
          <p className="moviesSecondHead">movie</p>
        </div>
        {createList()}
      </div>
    </div>
  );
};

export default MoviesList;
