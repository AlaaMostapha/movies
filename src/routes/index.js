import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import MoviesList from "../pages/moviesList/MoviesList";
import MovieDetails from "../pages/movieDetails/MovieDetails";
// import ProductDetails from "../pages/productDetails/productDetails";
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={["/", "/movies"]} component={MoviesList} />
        <Route path="/movies/:movieId" component={MovieDetails} />
      </Switch>
    </Router>
  );
}
