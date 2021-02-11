import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as moviesActions from "../../redux/actions/movies";
import * as searchActions from "../../redux/actions/search";
import CustomTextField from "../../components/input/customInput";
import MovieCard from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import history from "../../routes/history";
import "./MoviesList.scss";
const MoviesList = () => {
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
      return searchMovie.results.map((movie, i) => {
        return (
          <Grid
            item
            xs={3}
            onClick={() => history.push(`/movies/${movie.id}`)}
            key={i}
          >
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
};

export default MoviesList;
