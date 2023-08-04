import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";


function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
        history.push('/')
    }
  };

  const handleDemoUserSubmit = () => {
    const demoUser = {
      credential: "demo@aa.io",
      password: "password",
    };

    dispatch(sessionActions.login(demoUser))
      .then(closeModal)
      .catch((err) => {
      //add any errors if you want
      })
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      <NavLink id="demo-user-link" to="/" className="demo-user-button" onClick={handleDemoUserSubmit}>
        Demo User
      </NavLink>
    </>
  );
}

export default LoginFormModal;
