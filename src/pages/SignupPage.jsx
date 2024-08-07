import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const params = new FormData(e.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((res) => {
        console.log(res.data);
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <>
      <div id="signup">
        <h1>Sign Up</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Sign Up Form</legend>
            <div>
              Name: <input name="name" type="text" />
            </div>

            <div>
              Email: <input name="email" type="email" />
            </div>

            <div>
              Password: <input name="password" type="password" />
            </div>

            <div>
              Password confirmation:{" "}
              <input name="password_confirmation" type="password" />
            </div>

            <button type="submit">Signup</button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
