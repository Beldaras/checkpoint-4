import React, { useState } from "react";
import iconeBurger from "../assets/icons/menu.svg";

function MenuBurger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="block p-4 m-2 w-14 rounded"
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <img src={iconeBurger} alt="iconeBurger" className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded shadow-md py-2">
          <nav className="text-base font-jost">
            <a
              className="block px-4 py-2 text-gray-900 hover:text-red focus:text-red"
              href="/"
            >
              Accueil
            </a>
            <a
              className="block px-4 py-2 text-gray-900 hover:text-red focus:text-red "
              href="/Manga"
            >
              Manga
            </a>
            <a
              className="block px-4 py-2 text-gray-900 hover:text-red focus:text-red"
              href="/Collection"
            >
              Ma collection
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MenuBurger;
