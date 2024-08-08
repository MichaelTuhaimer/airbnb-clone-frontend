import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

const LoginPage = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const params = new FormData(e.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((res) => {
        console.log(res.data);
        axios.defaults.headers.common["Authorization"] =
          "Bearer" + res.data.jwt;
        localStorage.setItem("jwt", res.data.jwt);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(["invalid email and/or password"]);
      });
  };

  return (
    <>
      <div id="login">
        <h1>Login</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Login Form</legend>
            <div>
              Email: <input name="email" type="email" />
            </div>
            <div>
              Password: <input name="password" type="password" />
            </div>
            <button type="submit">Login</button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
