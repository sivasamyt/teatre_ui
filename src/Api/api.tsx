import Axios from "axios";
import React from "react";

const api="http://127.0.0.1:8000/api";

export const getAllMovieList = async () => {
  const movieList = await Axios.get(`${api}/movielist`);
  return movieList;
};
export const getMovieHasTheaterList = async (id: number) => {
  const theaterList = await Axios.get(
    `${api}/moviesTheater`,
    {
      params: {
        id: id,
      },
    }
  );
  return theaterList;
};

export const getAllTheaterList = async () => {
    const theaterList = await Axios.get(`${api}/theaterlist`);
    return theaterList;
  };

  export const getTheaterHasMovieList = async (id: number) => {
    const MovieList = await Axios.get(
      `${api}/theaterMovies`,
      {
        params: {
          id: id,
        },
      }
    );
    return MovieList;
  };

  export const getLoginToken = async (mail: string,pwd:string) => {
    const token = await Axios.post(`${api}/loginCheck`, {
      Email: mail,
      Password: pwd,
    });
    return token;
  };

  export const storeBookingSeats = async (theaterId: number,selectedSeats:any) => {
    const token = await Axios.post(`http://127.0.0.1:8003/api/bookingSeats`, {
      selectedTheaterId: theaterId,
      selectedSeats: selectedSeats,
    });
    return token;
  };




const Api = () => {
  return <div></div>;
};

export default Api;
