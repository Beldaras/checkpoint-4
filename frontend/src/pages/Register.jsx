import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

function Register() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const handlePseudo = (e) => {
    setPseudo(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        pseudo,
        email,
        password,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-full">
      <NavBar />
      <form
        className="flex flex-col items-center text-left mt-5 mb-6 gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-red h-10 rounded text-center w-56"
          type="text"
          name="pseudo"
          id="pseudo"
          placeholder="pseudo"
          value={pseudo}
          onChange={handlePseudo}
        />
        <input
          className="border border-red h-10 rounded text-center w-56"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />
        <input
          className="border border-red h-10 rounded text-center w-56"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <input
          className="border border-red h-10 rounded text-center w-56"
          type="password"
          name="confirm"
          id="confirm"
          placeholder="confirm password"
          value={confirm}
          onChange={handleConfirm}
        />
        <input
          className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
          type="submit"
          value="Sign in"
        />
      </form>
    </div>
  );
}

export default Register;
