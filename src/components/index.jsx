import { useState } from "react";
import { buttons } from "./buttons";
import RenderButtons from "./RenderButtons";
import "./style.css";

export default function MainScreen() {
  const [primaryArray, setPrimaryArray] = useState([]);
  return (
    <>
      <main className="main-container">
        <section className="output-screen"></section>
        <section className="input-screen">
          <RenderButtons buttons={buttons} />
        </section>
      </main>
    </>
  );
}
