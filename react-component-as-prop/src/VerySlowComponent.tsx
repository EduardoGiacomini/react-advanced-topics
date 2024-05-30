import { useState } from "react";

interface Props {
  index: number;
}

export function VerySlowComponent({ index }: Props): JSX.Element {
  const [color, setColor] = useState("blue");

  console.log(`VerySlowComponent  ${index} rendered`);

  const onClick = () => {
    setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
  };

  return (
    <h1 onClick={onClick} style={{ color, cursor: "pointer" }}>
      Vite + React
    </h1>
  );
}
