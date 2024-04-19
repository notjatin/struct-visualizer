import { useState } from "react";
import { capsFirst } from "./utilities/utils";
import "./style.css";

export default function MainScreen() {
  const [primaryArray, setPrimaryArray] = useState([]);

  return (
    <>
      <main className="main-container">
        <section className="output-screen"></section>
        <section className="input-screen"></section>
      </main>
    </>
  );
}
