import { useSelector } from "react-redux";
import "./App.css";
import LogoutButton from "./components/logoutButton";
import token, { tokens } from "./features/token";
import RootRoutes from "./routes/rootRoutes";
import { useLocation } from "react-router-dom";

function App() {

    const selector = useSelector(tokens);
    const tokenRedux=selector.authToken;
    const token=localStorage.getItem("token");
    // console.log("tokenRedux -",tokenRedux);
    // const location=useLocation();
    // console.log("location in apppage -",location);
    
    

  return (
    <div className="app">
    <div className="logout_button">
    {tokenRedux && <LogoutButton/>}
    </div>
      <RootRoutes />
    </div>
  );
}

export default App;
