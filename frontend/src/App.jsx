import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manga from "./pages/Manga";
import Details from "./pages/Details";
import Collection from "./pages/Collection";
import VolumeCard from "./components/VolumeCard";
import Register from "./pages/Register";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/details/:idmanga" element={<Details />} />
        <Route path="/volumeCard/:id" element={<VolumeCard />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
