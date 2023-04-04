import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "./Button";

function VolumeCard() {
  const { id } = useParams();
  const [volume, setVolume] = useState([]);
  const [read, setRead] = useState(false);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/volumes/${id}`)
      .then((res) => {
        setVolume(res.data);
      });
  }, []);
  console.log(volume);

  const handleRead = (e) => {
    if (e.target.checked === true) {
      setRead(1);
    } else {
      setRead(0);
    }
  };

  useEffect(() => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/volumes/${id}`, { read })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [read]);

  console.log(read);
  return (
    <div className="flex flex-col p-6">
      <div className="flex justify-center">
        <img
          className="w-72"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
            volume.picture
          }`}
          alt="Cover of manga"
        />
      </div>
      <h1>{volume.name}</h1>
      <p>Nombre de pages : {volume.pages}</p>
      <p>{volume.parution}</p>
      <div className="flex">
        <label
          className="mr-6 text-sm text-black text-left font-medium"
          htmlFor={volume.number}
        >
          Lu
        </label>
        <input
          id={volume.number}
          name="read"
          type="checkbox"
          onChange={handleRead}
        />
      </div>
      {/* <div className="flex justify-center">
        <Button className="w-10">Ajouter</Button>
        </div> */}
    </div>
  );
}

export default VolumeCard;
