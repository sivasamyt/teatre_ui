import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../features/token";
import BackButton from "../../components/homeButton";
import LogoutButton from "../../components/logoutButton";
import Axios from "axios";
import { useEffect, useState } from "react";
import TheaterHasMoviesList from "../../components/theaterHasMoviesList";
import StyleButton from "../../components/styleButton";
import "./styles.scss";
import { getAllTheaterList } from "../../Api/api";

type theaters = {
  id: number;
  name: string;
};

const theaterName = {
  color: "red",
  cursor: "pointer",
  width: "fit-content",
};

const TheatrePage = () => {
  const [theaters, setTheaters] = useState<theaters[]>([]);
  const [theaterList, setTheaterList] = useState<boolean>(true);
  const [theaterId, setTheaterId] = useState<number>(0);

  // const dispatch = useDispatch();
  // const navigate=useNavigate();
  // const selector = useSelector(tokens);
  // const token=selector.authToken;

  const theatersList = async () => {
    const theater = await getAllTheaterList();
    setTheaters(theater.data);
  };

  useEffect(() => {
    theatersList();
  }, []);

  const theaterAndMovieView = () => {
    setTheaterList(true);
  };

  const moviesView = (id: number) => {
    setTheaterId(id);
    setTheaterList(false);
  };

  return (
    <>
      <div className="theater_pagetop_corner_button">
        <BackButton />
      </div>
      <div className="theater_page">
        <h1>TheatrePage</h1>
        {/* <LogoutButton /> */}
        {theaterList ? (
          theaters.map((theater) => {
            return (
              <>
                <h3 style={theaterName} onClick={() => moviesView(theater.id)}>
                  {theater.name}
                </h3>
              </>
            );
          })
        ) : (
          <div className="Thaeter_page_movies_view">
            {/* <button onClick={theaterAndMovieView}>Back</button>{" "} */}
            <TheaterHasMoviesList id={theaterId} />
            <StyleButton label="Back" handleClick={theaterAndMovieView} />
          </div>
        )}
      </div>
    </>
  );
};
export default TheatrePage;
