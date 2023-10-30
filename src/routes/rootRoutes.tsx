import { Routes, Route } from "react-router-dom";
import MoviesPage from "../pages/moviesPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signupPage";
import PrivatesRoute from "../components/privatesRoute";
import TheatrePage from "../pages/theatrePage";
import PublicRoute from "../components/publicRoute";
import { useSelector } from "react-redux";
import { tokens } from "../features/token";
import LogoutButton from "../components/logoutButton";
import { useEffect, useState } from "react";
import TheaterSeat from "../components/theaterSeat";
import SeatSelectionPage from "../pages/seatSelection";

type Props = {};
const RootRoutes = (props: Props) => {
  const [tokenCheck, setTokenCheck] = useState<any>("");
  const selector = useSelector(tokens);
  const tokenRedux = selector.authToken;
  const token = localStorage.getItem("token");

  useEffect(() => {
    {
      token && setTokenCheck(token);
    }
  }, [token, tokenRedux]);

  return (
    <>
      {/* {tokenCheck && <LogoutButton />} */}

      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/theatre"
          element={
            <PrivatesRoute>
              <TheatrePage />
            </PrivatesRoute>
          }
        />
        <Route path="/seat/:id/:name/:capacity" element={<SeatSelectionPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default RootRoutes;
