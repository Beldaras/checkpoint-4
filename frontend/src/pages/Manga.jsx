import React, { useEffect, useState } from "react";
import axios from "axios";
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
      <div className="grid gap-4 grid-cols-2 p-6">
        {mangas.map((manga) => (
          <MangaCard
            key={manga.picture}
            name={manga.name}
            picture={manga.picture}
            type={manga.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Manga;
