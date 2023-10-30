import React from "react";
import * as colors from "@mui/material/colors";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type ColorOption = keyof typeof colors;

type Props = {
  label: string;
  handleClick?: () => void;
  type?: any;
  color?: ColorOption;
  Icon?: any;
};

const StyleButton: React.FC<Props> = ({
  label,
  handleClick,
  type,
  color,
  Icon,
}) => {
  const selectedColor = color
    ? (colors[color] as { [key: string]: string })
    : colors.purple;

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(selectedColor[500]),
    backgroundColor: selectedColor[500],
    "&:hover": {
      backgroundColor: selectedColor[900],
    },
  }));
  return (
    <ColorButton
      startIcon={Icon}
      variant="contained"
      onClick={handleClick && handleClick}
      type={type ? type : ""}
    >
      {label}
    </ColorButton>
  );
};

export default StyleButton;
