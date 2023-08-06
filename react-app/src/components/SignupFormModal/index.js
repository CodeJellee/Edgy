import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";
function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // error handlers onSubmit
    // backend already returns custom ones for email/username
    const errObj = {};
    // cannot be empty - 'required' attribute handles these, so you need to handle edge cases like password length of 1
    // if (first_name === "") errObj.first_name = "First name is required.";
    // if (last_name === "") errObj.last_name = "Last name is required.";
    // if (password === "" || confirmPassword === "")
    //   errObj.password = "Password is required.";
    // if (username === "") errObj.username = "Username is required.";
    // if (email === "") errObj.email = "Email is required.";

    // Edge Case Error handlers
    // if (first_name === "") errObj.first_name = "First name is required.";
    // if (last_name === "") errObj.last_name = "Last name is required.";
    if (
      (password.length < 6 && password !== confirmPassword) ||
      (confirmPassword.length < 6 && password !== confirmPassword)
    )
      errObj.password = "Password requires a minimum of 6 characters.";
    if (username.length < 6)
      errObj.username = "Username requires a minimum of 6 characters.";
    if (email.length < 6)
      errObj.email = "Email requires a minimum of 6 characters.";
    if (!email.includes("@")) errObj.email = "Invalid email";

    // setErrors if there are any
    if (Object.values(errObj).length > 0) return setErrors(errObj);

    if (password === confirmPassword) {
      const data = await dispatch(
        signUp(username, email, password, first_name, last_name)
      );
      if (data) {
        setErrors(data);
      } else {
        closeModal();
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
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
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          First Name
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          last Name
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
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
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
export default SignupFormModal;
