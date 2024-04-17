// render buttons
import { capsFirst } from "./utilities/utils.js";

export default function RenderButtons({ buttons }) {
  const handleInsert = () => {
    console.log("Insert called.");
  };

  const handleDelete = () => {
    console.log("Delete called.");
  };

  return (
    <>
      {buttons.map((button, index) => (
        <button key={index}>{button.label}</button>
      ))}
    </>
  );
}
