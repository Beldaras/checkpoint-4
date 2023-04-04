import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import MangaCard from "../components/MangaCard";

function Manga() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/mangas`).then((res) => {
      setMangas(res.data);
    });
  }, []);
  console.log(mangas);

  return (
    <div>
        <NavBar />
      <div className="grid gap-4 grid-cols-1 p-6">
        {mangas.map((manga) => (
          <MangaCard
            key={manga.picture}
            idmanga={manga.idmanga}
            name={manga.name}
            picture={manga.picture}
            type={manga.type}
            mangaka={manga.mangaka}
            state={manga.state}
            editor={manga.editor}
          />
        ))}
      </div>
    </div>
  );
}

export default Manga;
