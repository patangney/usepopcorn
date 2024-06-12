import React, { useState } from "react";
import Search from "./search";
import Logo from "./logo";
import NumResults from "./NumResults";

const Navbar = () => {
  const movies = []; // Add your movies array here

  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
};

export default Navbar;
