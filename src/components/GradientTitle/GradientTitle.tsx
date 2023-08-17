import { CSSProperties } from "react";

interface Props {
  content: string;
  gradientFrom: string;
  gradientTo: string;
  fontSize: string;
}

export default function GradientTitle({ content, gradientFrom, gradientTo, fontSize }: Props) {
  return (
    <h1
      style={
        {
          color: "transparent",
          backgroundImage: "linear-gradient(to right, var(--tw-gradient-stops))",
          "--tw-gradient-from": gradientFrom,
          "--tw-gradient-to": gradientTo,
          "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
          WebkitBackgroundClip: "text",
          fontSize: fontSize,
          fontStyle: "normal",
          fontWeight: 600,
        } as CSSProperties
      }
    >
      {content}
    </h1>
  );
}
