import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manga from "./pages/Manga";
import Collection from "./pages/Collection";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
