import React from "react";
import { Link } from "react-router-dom";

function MangaCard({ idmanga, name, picture, type }) {
  return (
    <div>
      <Link to={`/Details/${idmanga}`}>
        <div className="flex flex-col items-center w-full h-[320px] rounded-lg shadow-md p-4 bg-white">
          <img
            className="h-[220px]"
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${picture}`}
            alt="cover tome 1"
          />
          <h1>{name}</h1>
          <p>{type}</p>
        </div>
      </Link>
    </div>
  );
}

export default MangaCard;
