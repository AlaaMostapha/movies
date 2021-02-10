import React, { useEffect } from "react";
import "./MoviesList.scss";
import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as moviesActions from "../../redux/actions/movies";
import * as searchActions from "../../redux/actions/search";
import { useForm } from "react-hook-form";
import CustomTextField from "../../components/input/customInput";
import MovieCard from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import history from "../../routes/history";
function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesReducer.movies);
  const searchMovie = useSelector((state) => state.moviesReducer.searchMovie);
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
    console.log("form state", values.search);
    // dispatch(actions.Login(values));
    dispatch(searchActions.searchForMovieRequest(values.search));
    console.log("movies", movies);
  };
  const createList = () => {
    if (movies) {
      return (
        <Grid item xs={3} onClick={() => history.push(`/movies/${movies.id}`)}>
          <MovieCard
            img={movies.poster_path}
            title={movies.title}
            rate={movies.vote_average}
          />
        </Grid>
      );
    } else if (searchMovie) {
      console.log(searchMovie.results);
      return searchMovie.results.map((movie) => {
        return (
          <Grid item xs={3} onClick={() => history.push(`/movies/${movie.id}`)}>
            <MovieCard
              img={movie.poster_path}
              title={movie.title}
              rate={movie.vote_average}
            />
          </Grid>
        );
      });
    } else {
      return <Loader />;
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomTextField
            type="search"
            name="search"
            placeholder="search for a movie...."
            reference={register}
          />
          {/* <input type="text" /> */}
          <input
            type="submit"
            style={{ position: "absolute", left: "-9999px" }}
          />
        </form>
      </Grid>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <Typography
            variant="p"
            component="p"
            gutterBottom
            className="moviesFirstHead"
          >
            latest
          </Typography>
          <Typography
            variant="p"
            component="p"
            gutterBottom
            className="moviesSecondHead"
          >
            movie
          </Typography>
        </Grid>
        {createList()}
      </Grid>
    </Container>
  );
}

export default MoviesList;
