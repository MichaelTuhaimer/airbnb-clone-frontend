import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogoutLink = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    navigate("/");
  };
  return (
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  );
};

export default LogoutLink;
