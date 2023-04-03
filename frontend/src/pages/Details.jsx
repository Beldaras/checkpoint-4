import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navBar";
// import VolumeCard from "../components/VolumeCard";

function Details() {
  const { idmanga } = useParams();

  const [mangaDetails, setMangaDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/mangas/${idmanga}`)
      .then((res) => {
        setMangaDetails(res.data);
      });
  }, []);
  console.log(mangaDetails);

  return (
    <div>
      <NavBar />
      {/* <h1>{mangaDetails[0].name}</h1>
      <p>{mangaDetails[0].mangaka}</p>
      <p>{mangaDetails[0].editor}</p>
      <p>{mangaDetails[0].state}</p> */}

      <div className="grid gap-4 grid-cols-2 p-6">
        {mangaDetails.map((mangaDetail) => (
          <Link to={`/VolumeCard/${mangaDetail.id}`}>
            <div className="flex flex-col items-center w-full h-[320px] rounded-lg shadow-md p-4 bg-white">
              <img
                className="h-[220px]"
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                  mangaDetail.picture
                }`}
                alt="cover tome"
              />
              <p>Tome {mangaDetail.number}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Details;
