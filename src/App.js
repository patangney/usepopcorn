import { useState } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}
