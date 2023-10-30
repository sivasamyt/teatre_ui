import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RootState } from "../../features/store";
import LogoutButton from "../../components/logoutButton";
import StyleButton from "../../components/styleButton";
import "./styles.scss";

type Props = {};

const HomePage = () => {
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const path = useSelector((state: RootState) => state.path.pathLink.pathLink);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const moviesPage = async () => {
    nav("/movies");
  };

  const theatrePage = () => {
    nav("/theatre");
  };
  const signupPage = () => {
    nav("/signup");
  };
  const loginPage = () => {
    nav("/login");
  };
const check=()=>{
  setCount(count+1);
  setCount(count+1);
  setCount(count+1);
}
useEffect(() => {
  console.log('check',count);
  },[count])

  return (
    <div className="home_page">
      <h1>HomePage</h1>
      {message && message} <br />
      <StyleButton label="Signup" handleClick={signupPage} color="brown" />
      {!token && (
        <StyleButton label="Login" handleClick={loginPage} color="brown" />
      ) 
        // : <LogoutButton />
      }
      <StyleButton label="Movies List" handleClick={moviesPage} color="brown" />
      <StyleButton
        label="Theaters"
        handleClick={theatrePage}
        color={!token ? "red" : "brown"}
      />
        <StyleButton label="check" handleClick={check} color="brown" />
        {count}
    </div>
  );
};

export default HomePage;
