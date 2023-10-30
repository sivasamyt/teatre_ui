import Axios from "axios";
import React, { useEffect, useState } from "react";

type theaters={
    id: number;
    name: string;
}
type Props = {
  setTheaterList: boolean,
};

const TheaterList: React.FC<Props> = ({setTheaterList}) => {
  const [theaters, setTheaters] = useState<theaters[]>([]);

  const theaterName = {
    color: "red",
    cursor: "pointer",
  };

  const theaterMovies = async (id: number) => {
    try {
      const movieList = await Axios.get(
        "http://127.0.0.1:8001/api/theaterMovies",
        {
          params: {
            id: id,
          },
        }
      );
      console.log("movieListmovieList ", movieList.data);
      setTheaterList: false;
    } catch (e) {}
  };

  return (
    <div>
      {theaters.map((theater) => {
        return (
          <>
            {/* <h3>{theater.id}</h3> */}
            <h3 style={theaterName} onClick={() => theaterMovies(theater.id)}>
              {theater.name}
            </h3>
          </>
        );
      })}
    </div>
  );
};

export default TheaterList;
