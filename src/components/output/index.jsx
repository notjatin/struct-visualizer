import { useEffect } from "react";
export default function OutputComponent({ array }) {
  useEffect(() => {
    return () => {};
  }, [array]);

  return (
    <section className="out-screen">
      {array.map((item, index) => (
        <div className="node" key={index}>{item}</div>
      ))}
    </section>
  );
}
