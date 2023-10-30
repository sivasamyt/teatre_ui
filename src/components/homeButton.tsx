import React from "react";
import { useNavigate } from "react-router-dom";
import { green, purple } from "@mui/material/colors";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

type Props = {};

const BackButton = (props: Props) => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[300]),
    backgroundColor: green[300],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));
  return (
    <div>
      <ColorButton  startIcon={<HomeIcon />} variant="contained" onClick={home}>
        Home
      </ColorButton>
    </div>
  );
};

export default BackButton;
