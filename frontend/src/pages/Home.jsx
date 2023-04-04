import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <div className="h-full">
        <NavBar />
        <form
          className="flex flex-col items-center text-left mt-5 mb-6 gap-2"
          // onSubmit={handleSubmit}
        >
          <input
            className="border border-red h-10 rounded text-center w-56"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            // value={email}
            // onChange={handleEmail}
          />
          <input
            className="border border-red h-10 rounded text-center w-56"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            // value={hashed_password}
            // onChange={handlePassword}
          />
          <Link to="/manga">
            <input
              className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
              type="submit"
              value="Log in"
            />
          </Link>
        </form>
        <div className="flex justify-center">
          <Link to="/register">
        <Button>Sign in</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
