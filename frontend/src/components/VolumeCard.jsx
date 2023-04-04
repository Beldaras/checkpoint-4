import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "./Button";

function VolumeCard() {
  const { id } = useParams();
  const [volume, setVolume] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/volumes/${id}`)
      .then((res) => {
        setVolume(res.data);
      });
  }, []);
  console.log(volume);

  return (
    <div className="flex flex-col p-6">
        <div className="flex justify-center">
      <img className="w-72"
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
          volume.picture
        }`}
        alt="Cover of manga"
      />
      </div>
      <h1>{volume.name}</h1>
      <p>Nombre de pages : {volume.pages}</p>
      <p>{volume.parution}</p>
      <div className="flex justify-center">
      <Button className="w-10">Ajouter</Button>
      </div>
    </div>
  );
}

export default VolumeCard;
