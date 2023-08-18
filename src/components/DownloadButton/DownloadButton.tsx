"use client";

import { CSSProperties } from "react";
import styles from "./downloadButton.module.css";

interface Props {
  content: string;
  file: string;
}

export default function DownloadButton({ content, file }: Props) {
  return (
    <div className={`${styles.outer_button} ${styles.purple_shadow} ${styles.purple_gradient} `}>
      <button
        onClick={() => window.open(file)}
        className={`${styles.button} ${styles.transition_colors}`}
      >
        <h6>{content}</h6>
      </button>
    </div>
  );
}
