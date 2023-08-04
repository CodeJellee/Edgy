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
  // const [demoPassword, setPa]
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



  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
      history.push('/')
    }
  };


  const handleDemoUserSubmit = async (e) => {
    e.preventDefault()
    const demoUser = {
      credential: "demo@aa.io",
      password: "password",
    };
    console.log("in handle demo submit")
    const data = await dispatch(login("demo@aa.io", "password"))
    console.log(data)

    if (data) {
      setErrors(data);
    } else {
      closeModal()
      history.push('/')
    }

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
      <form onSubmit={handleDemoSubmit}>
        <button type="submit">DemoUser</button>
      </form>

    </>
  );
}

export default LoginFormModal;
