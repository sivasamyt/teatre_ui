import Axios from "axios";
import React, { useEffect, useState } from "react";
import { getTheaterHasMovieList } from "../Api/api";

type Props = {
  id: any;
};
type Movies = {
  name: string;
  description: string;
  capacity: number;
};

const TheaterHasMoviesList: React.FC<Props> = ({ id }) => {
  const [theaterMoviesList, setTheaterMoviesList] = useState<Movies[]>([]);

  const theaterMovies = async (id: number) => {
    try {
      const movieList = await getTheaterHasMovieList(id);
      setTheaterMoviesList(movieList.data);
    } catch (e) {}
  };

  useEffect(() => {
    theaterMovies(id);
  }, []);

  return (
    <div>
      {theaterMoviesList.map((movies) => {
        return (
          <>
            <h2 style={{ color: "brown" }}>
              Movie Name : <span style={{ color: "red" }}>{movies.name}</span>
            </h2>
            <p>Movie description : {movies.description}</p>
            <h3 style={{ color: "brown" }}>
              Seat Capacity :{" "}
              <span style={{ color: "Green" }}>{movies.capacity}</span>{" "}
            </h3>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default TheaterHasMoviesList;
