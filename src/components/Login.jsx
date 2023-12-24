import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="login">
      <form
        className="login-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <p className="text">Welcome back</p>
        <h1>Login to your account</h1>
        <p className="text">Name:</p>
        <input
          type="name"
          placeholder="Enter your username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text">Email:</p>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text">Password:</p>
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Login now
        </button>
      </form>
    </div>
  );
};

export default Login;
