import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/rootReducer";
import StyleButton from "./styleButton";
import LogoutIcon from "@mui/icons-material/Logout";

type Props = {};

const LogoutButton = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutFn = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/");
  };
  const icon = <LogoutIcon />;
  return (
    <>
      {/* <button onClick={logoutFn}>Logout</button> */}
      <StyleButton
        label="Logout"
        handleClick={logoutFn}
        color="red"
        Icon={icon}
      />
    </>
  );
};

export default LogoutButton;
