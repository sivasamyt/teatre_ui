import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import { tokenGet } from "../../features/token";
import { useForm } from "react-hook-form";
import BackButton from "../../components/homeButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.scss";
import LoginIcon from "@mui/icons-material/Login";
import { getLoginToken } from "../../Api/api";


type Props = {};

const LoginPage = (props: Props) => {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [auth, setAuth] = useState("");

  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const redirectUrl = location.state?.redirected;
  // console.log("redirectUrl in login page - ",redirectUrl);
  

  // const objCheck={
  //   pathname:"/",
  //   name:"hello",
  //   number:123,
  //   check:true
  // }

  const tokenStore = (token: any) => {
    if (token != "") {
      dispatch(
        tokenGet({
          token,
        })
      );
      localStorage.setItem("token", token);
      setAuth(token);
      // console.log("redirectUrl of pathname  --",  redirectUrl?.pathname);
      navigate(redirectUrl ? redirectUrl.pathname : "/", {
        state: redirectUrl?.state ? redirectUrl.state : {},
      });
    }
  };

  const apiCheck = async () => {
    try {
      const token = await getLoginToken(mail,pwd);
      tokenStore(token.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login_page">
      <h1>Login Here</h1>
      <div>
        <form className="login_form" onSubmit={handleSubmit(apiCheck)}>
          <TextField
            required
            label="Email Id"
            onChange={(e) => setMail(e.target.value)}
          />
          <TextField
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPwd(e.target.value)}
          />
          <div className="login_buttons">
            <Button  startIcon={<LoginIcon />} variant="contained" type="submit">
              Login
            </Button>
            <BackButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
