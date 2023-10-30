import React, { useState } from "react";
import MovieHasTheaters from "../../components/movieHasTheaters";
import StyleButton from "../../components/styleButton";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import TheaterSeat from "../../components/theaterSeat";
import "./styles.scss";


type Props = {};
type T = {
  id: number;
};
const SeatSelectionPage: React.FC<Props> = ({}) => {
  const [seatSelect, setSeatSelect] = useState<boolean>(false);
  const [theaterCapacity, setTheaterCapacity] = useState<number>(0)
const [theaterId, setTheaterId] = useState(0)
  const params = useParams();
  const navigate = useNavigate();

  const id = params.id ? parseInt(params.id) : 0;
  const movieName = params.name ? params.name : "";
  const capacity = params.capacity ? parseInt(params.capacity) : 0;

  const seatView = () => {
    setSeatSelect(false);
  };
  const moviesListView = () => {
    navigate("/movies");
  };
  // console.log("theaterCapacity ",theaterCapacity);
  
  return (
    <div className="seat_page">
      {seatSelect ? (
        <div>
          <TheaterSeat seatQnty={theaterCapacity} selectedTheaterId={theaterId} />
          <div className="seat_pagetop_corner_button">
          <StyleButton label="back" handleClick={seatView} color="red" />
          </div>
        </div>
      ) : (
        <div>
          <div className="seat_pagetop_corner_button">
            <StyleButton
              label="back"
              handleClick={moviesListView}
              color="red"
            />
          </div>
          <MovieHasTheaters
            id={id}
            movieName={movieName}
            capacity={capacity}
            setSeatSelect={setSeatSelect}
            setTheaterCapacity={setTheaterCapacity}
            setTheaterId={setTheaterId}
          />
        </div>
      )}
    </div>
  );
};

export default SeatSelectionPage;
