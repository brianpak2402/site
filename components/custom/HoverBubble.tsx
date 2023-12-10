"use client";

import { useEffect, useState } from "react";

export default function HoverBubble() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  useEffect(() => {
    const resetCoordinates = (event: MouseEvent) => {
      event.preventDefault();
      setClientX(event.clientX);
      setClientY(event.clientY);
    };

    document.addEventListener("mousemove", resetCoordinates);
    return () => document.removeEventListener("mousemove", resetCoordinates);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
