import React, { useEffect } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useDispatch, useSelector } from "react-redux";
import * as singleMovieActions from "../../redux/actions/singleMovie";
import Rate from "../../components/rate/Rate";
import Btn from "../../components/btn/Btn";
import "./MovieDetails.scss";

const MovieDetails = (props) => {
  const dispatch = useDispatch();
  const {
    singleMovieReducer: { singleMovie },
  } = useSelector((state) => state);
  useEffect(() => {
    const { movieId } = props.match.params;
    // request item from api
    dispatch(singleMovieActions.singleMovieRequest(movieId));
  }, []);
  return (
    <div className="container">
      {singleMovie && (
        <div className="row mt-4">
          <div className="col-md-4">
            <img
              src={
                singleMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`
                  : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0PDg0NDQ0NDQ0NDQ8NDQ4NFhEWFhURExMYHSggGBolGxUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBAUH/8QAMBABAQACAAIGCAcBAQAAAAAAAAECEQMEEiExQVJxFTJRYWKRobEFExQigZKi0XL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/RAAAAAAAAAADQ0GaNNAZo0oBOjSzQI0adDQOejTpo0Dno0vRoEaNLYCdGlMBg2sAAAAAAAAAAAAAAAAAAAAAayKBjRoDdEipATpulaboE6NLkNAjRpejQIZpemaBGmLsZYCBVTQZWNYAAAAAAAAAAAAAAAAAAAABFJioDWyEVAFSEipAZMVSNkVICZG6Xo0COizTthw7l1SW+UdOLyuWGPSuu3Wu2wHk0yx1sTYDlYyulibAc9JrpU0EJVUgAAAAAAAAAAAAAAAAAAAARcRF4gqKjIuA2RWMZHfg8HLL1cbff3fMESKmL28LkPHf4x/69Mxw4fZjd+7G2/MHi4XKZ5d2p7+p6ceUwx68rvz6ozPj8S+rhZ77La4ZY53rsyvnKD0Zc1hj1YzflNRWN/N4dl7bueV7nk/Ly8N+Vd+U3LZZdWey9oPBcU2PbzXBvStktl6+qb63C8HPwZf1oPNYmx1sRYDlU10sRkDlUrqAAAAAAAAAAAAAAAAAAAAAI6YucdMQXF4oi8Qev8AD5jc9ZSXc6t+17+Z5n8vUmPbOr2Pk8PKyyztllj6nN49PhzOd2sv47wOT4uWeWXSvdNTuis+a6Ns6O9X2uX4d25eUc+P6+XmD0fq/h+p+q+H6rnLY613+3byZTVs9lsB6f1Xw/Vl5v4fq8yuJhcdb75sHa858P1duX43T31a179vn16uQ7MvOfYHg4vrZed+7lXbi+tfO/dxoIrnXSudBzyRV5IoAAAAAAAAAAAAAAAAAAAAEdMXOOmILi8XOLgLj6n4fn0sLhe77V8qPVyXF6OePsv7b/IPXyWHRzzxvc48f18vN75w9Z3L24yXzj5/Mevl5g7Y8zlJrq8+9y2rluF07u+rO2+33PTxOWl7P2/YHPluFu7vZOz316eJw5lOvuVjjJJJ2RoPnc1h0curss3HbkOzLzn2bz+O8Zl7L9Kn8OvVl5wHh4vrXzv3csl8W/uy8793Ogioq7UZA55IXkgAAAAAAAAAAAAAAAAAAAACLiIqAuKiIqA6Sqlc5VSg+7yvE6eGN79avnHh5jDLp5axys32yVz5Tm/y5ZZuXr7dar0+kp4L/YDHmOJJqcPUnw5N/VcXwf5yPSM8H1PSM8F+YN/VcTwf5yZ+q4vg/wA5HpGeC/M9IzwfUE8Tj8TKWXDqvV6uTr+HY2TLcs652zTn6SngvzZ6Tngv9geHi392X/q/dztbnlu2+22otBlTk2poIqVVIAAAAAAAAAAAAAAAAAAAAEVEqBqpUNBcqtucqtguVUrnK3YOkrduezYOmzbn0i0FbZck7ZsG2stZtloFqaUBiWsAAAAAAAAAAAAAAAAAAAAAaxoDWAKakBcptICzaGgrZtIDdm07Ng3bGAAMArG1gAAAAAAAAAAAAAAAAAAAABsAaMAaMAUJAUJAUJAUJAaMAaMAbWAAAAAAAAAAAD//2Q=="
              }
              className="card-poster"
            />
          </div>
          <div className="col-md-8">
            <p className="singleMovieTitle">{singleMovie.title}</p>
            <div className="row">
              <div className="col-sm-6 mb-4">
                {singleMovie.vote_average && (
                  <div className="d-flex">
                    <Rate value={singleMovie.vote_average} />
                    <span className="ml-3">{singleMovie.vote_average}</span>
                  </div>
                )}
              </div>
              <div className="col-sm-6 mb-4 text-right">
                <span className="singleMovieSecondryHeadings">
                  {singleMovie.original_language &&
                    singleMovie.original_language}
                  / {singleMovie.release_date && singleMovie.release_date}
                </span>
              </div>
            </div>
            {singleMovie.genres && (
              <>
                <p className="singleMoviePrimaryHeadings">the genres</p>
                <div className="d-flex  flex-wrap geners">
                  {singleMovie.genres.map((gener, i) => {
                    return (
                      <div key={i} className="d-flex">
                        <PlayCircleFilledIcon className="generIcon" />
                        <span className="generName">{gener.name}</span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {singleMovie.overview && (
              <>
                <p className="singleMoviePrimaryHeadings">overview</p>
                <p>{singleMovie.overview}</p>
              </>
            )}

            <div className="text-right">
              <Btn text="Back" href="/movies" className="generalBtn" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
