import { useState } from "react";

export default function PrinipleGroupRelated() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointer = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onPointerMove={handlePointer}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
