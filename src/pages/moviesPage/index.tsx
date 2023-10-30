import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import BackButton from "../../components/homeButton";
import MovieHasTheaters from "../../components/movieHasTheaters";
import { pathSet, paths } from "../../features/path";
import { idSet, theaterIds } from "../../features/theaterId";
import "./styles.scss";
import StyleButton from "../../components/styleButton";
import { getAllMovieList } from "../../Api/api";

interface Movie {
  id: number;
  name: string;
  description: string;
  capacity: number;
}

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  // const [theaterView, setTheaterView] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<number>(0);
  const [selectedMovieName, setSelectedMovieName] = useState<string>("");
  const [selectedMoviecapacity, setSelectedMoviecapacity] = useState<number>(0);

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selector = useSelector(theaterIds).id;

  const token = localStorage.getItem("token");
  // const theaterId = selector.id;
  const theaterId = location.state?.theaterId ? location.state.theaterId : 0;

  const nameOfMovie = location.state?.movieName ? location.state.movieName : "";

  const ticketCapacity = location.state?.ticketCapacity
    ? location.state.ticketCapacity
    : 0;

  // const theaterAndMovieView = () => {
  //   setTheaterView(false);
  // };
  const movieList = async () => {
    if (theaterId != 0 && nameOfMovie != "") {
      // const id= parseInt(theaterId);
      theatersView(theaterId, nameOfMovie, ticketCapacity);
    }
    try {
      // const movies = await Axios.get("http://127.0.0.1:8001/api/movielist");
      const movies = await getAllMovieList();
      setMoviesList(movies.data);
    } catch (e) {}
  };

  const theatersView = (id: number, name: string, capacity: number) => {
    if (token) {
      navigate(`/seat/${id}/${name}/${capacity}`);
      // setTheaterView(true);
      // setMovieId(id);
      // setSelectedMovieName(name);
      // setSelectedMoviecapacity(capacity);
    } else {
      dispatch(idSet({ id, name }));
      navigate("/login", {
        state: {
          redirected: {
            ...location,
            state: { theaterId: id, movieName: name, ticketCapacity: capacity },
          },
        },
      });
    }
  };
  useEffect(() => {
    movieList();
  }, []);

  return (
    <>
      <div className="movies_pagetop_corner_button">
        <BackButton />
      </div>
      <div className="movies_page">
        <h1>MoviesPage</h1>
        {moviesList.map((movie) => {
          return (
            <>
              <h2
                className="movieNameStyle"
                onClick={() =>
                  theatersView(movie.id, movie.name, movie.capacity)
                }
              >
                {movie.name}
              </h2>
              <p>{movie.description}</p>
              <h4 className="capacityStyle">
                Ticket capacity- {movie.capacity}
              </h4>
              <hr />
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MoviesPage;
