import React from "react";
import MenuBurger from "./MenuBurger";
// import logo from "../assets/images/japan.png";


function navBar() {
  return (
    <div className="w-full flex p-2 bg-slate-950/70">
      <MenuBurger />
      <h1 className="flex justify-center items-center ml-12 text-red text-xl font-semibold">Otaku’s Collection</h1>
      {/*<img
        src={logo}
        alt="logo du site"
        className="m-2 h-12 w-12"
  />*/}
    </div>
  );
}

export default navBar;
