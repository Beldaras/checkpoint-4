import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
// import background from "../assets/images/backgound.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        email,
        password,
      })
      .then(() => {
        navigate("/manga");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-full flex flex-col justify-between items-center">
      <NavBar />
      <form
        className="flex flex-col items-center text-left mt-5 mb-6 gap-2"
        onSubmit={handleSubmit}
      >
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
          className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
          type="submit"
          value="Log in"
        />
        <Link to="/register">
          <Button>Sign in</Button>
        </Link>
      </form>

      <Footer />
    </div>
  );
}
