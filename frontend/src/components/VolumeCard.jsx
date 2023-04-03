import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
          volume.picture
        }`}
        alt="Cover of manga"
      />
      <h1>{volume.name}</h1>
      <p>Nombre de pages : {volume.pages}</p>
      <p>{volume.parution}</p>
    </div>
  );
}

export default VolumeCard;
