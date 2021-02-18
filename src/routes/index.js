import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import MoviesList from "../pages/moviesList/MoviesList";
import MovieDetails from "../pages/movieDetails/MovieDetails";
import AddNewMovie from "../pages/addNewMovie/AddNewMovie";
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={["/", "/movies"]} component={MoviesList} />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route path="/AddNewMovie" component={AddNewMovie} />
      </Switch>
    </Router>
  );
}
