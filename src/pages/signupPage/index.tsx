import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/homeButton";
import SignupButton from "../../components/signupButton";
import StyleButton from "../../components/styleButton";
import TextField from "@mui/material/TextField";
import "./styles.scss";

type Props = {};

const SignupPage = (props: Props) => {
  const [submit, setSubmit] = useState(false);
  const [loading, setloading] = useState(false);
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      await Axios.post("http://127.0.0.1:8000/api/userSignup", {
        Username: data.Username,
        Email: data.Email,
        Password: data.Password,
      });
      nav("/", { state: "Signed Up Successfully" });
    } catch (e) {}
  };
  const unLoad = () => {
    setloading(false);
  };

  const load = () => {
    setloading(true);
  };

  useEffect(() => {
    cpwd && cpwd === pwd ? setSubmit(true) : setSubmit(false);
  }, [cpwd, pwd]);

  return (
    <div className="signup_page">
        <h1>User Signup Form</h1>
      {/* <div className="col-sm-12"> */}
        <form className="signup_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <TextField
              required
              size="small"
              label="Username"
              onFocus={load}
              className="form-control"
              type="text"
              {...register("Username", {
                onBlur: unLoad,
              })}
            />
          </div>
          <div className="form-group">
            <TextField
              required
              size="small"
              label="Email Id"
              onFocus={load}
              className="form-control"
              type="text"
              {...register("Email", {
                onBlur: unLoad,
              })}
            />
          </div>

          <div className="form-group">
            <TextField
              required
              size="small"
              label="Password"
              onFocus={load}
              className="form-control"
              type="Password"
              {...register("Password", {
                onBlur: unLoad,
              })}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <TextField
              required
              size="small"
              label="confirmPassword"
              onFocus={load}
              className="form-control"
              type="text"
              onBlur={unLoad}
              onChange={(e) => {
                setCpwd(e.target.value);
              }}
            />
          </div>

          <div className="signup_buttons">
            <SignupButton isDisabled={submit} loading={loading} type="submit" />
            &nbsp; &nbsp;
            <BackButton />
          </div>
        </form>
      
    </div>
  );
};

export default SignupPage;
