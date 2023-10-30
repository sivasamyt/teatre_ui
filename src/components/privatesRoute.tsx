import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: any; // checked docs
};

const PrivatesRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate replace to="/login" state={{ redirected: location }} />;
  }
  return <>{children}</>;
};

export default PrivatesRoute;
