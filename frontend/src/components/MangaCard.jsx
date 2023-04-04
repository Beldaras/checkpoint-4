import React from "react";
import { Link } from "react-router-dom";

function MangaCard({ idmanga, name, picture, type, mangaka, state, editor }) {
  return (
    <div>
      <Link to={`/Details/${idmanga}`}>
        <div className="flex flex-col items-center w-full h-[400px] rounded-lg shadow-md p-4 bg-white">
          <h1>{name}</h1>
          <p>{type}</p>
          <div className="flex justify-center items-center space-x-6 w-full m-4">
            <img
              className="h-[220px]"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/assets/images/${picture}`}
              alt="cover tome 1"
            />
            <div className="flex flex-col gap-2">
              <p>{editor}</p>
              <p>{state}</p>
            </div>
          </div>
          <p>{mangaka}</p>
        </div>
      </Link>
    </div>
  );
}

export default MangaCard;
