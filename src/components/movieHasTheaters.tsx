import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import TheaterSeat from "./theaterSeat";
import { useNavigate } from "react-router-dom";
import { getMovieHasTheaterList } from "../Api/api";

type Props = {
  id: number;
  movieName: string;
  capacity: number;
  setSeatSelect: any;
  setTheaterCapacity: any;
  setTheaterId: any;
};
type Theater = {
  theater_id: number;
  name: string;
  Capacity: number;
};

const MovieHasTheaters: React.FC<Props> = ({
  id,
  movieName,
  capacity,
  setSeatSelect,
  setTheaterCapacity,
  setTheaterId,
}) => {
  const [movieTheatersList, setMovieTheatersList] = useState<Theater[]>([]);
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const movieTheaters = async (id: number) => {
    try {
      const theaterList = await getMovieHasTheaterList(id);
      // console.log("theaterList = ",theaterList.data);
      !theaterList.data.length
        ? setMessage("No theaters Available")
        : setMovieTheatersList(theaterList.data);
    } catch (e) {}
  };

  useEffect(() => {
    movieTheaters(id);
  }, []);

  const seatsSelect = (theaterSeatsCapacity: number, id: number) => {
    // console.log("theaterSeats id ",id);
    setTheaterCapacity(theaterSeatsCapacity);
    setTheaterId(id);
    setSeatSelect(true);
  };
  // console.log("movieTheatersList ",movieTheatersList);
  
  return (
    <div>
      <h1>Movie Name - {movieName}</h1>
      <h2 style={{ color: "red" }}>{message}</h2>
      <br />
      {movieTheatersList.map((theater) => {
        return (
          <>
            <h3
              className="tickets_booking"
              onClick={() => seatsSelect(theater.Capacity, theater.theater_id)}
            >
              Theater Name -{" "}
              <span className="theater_name"> {theater.name}</span>
            </h3>
          </>
        );
      })}
    </div>
  );
};

export default MovieHasTheaters;
