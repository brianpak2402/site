"use client";

import styles from "./downloadButton.module.css";

interface Props {
  content: string;
  file: string;
}

export default function DownloadButton({ content, file }: Props) {
  return (
    <button
      onClick={() => window.open(file)}
      className={`${styles.button} ${styles.purple_shadow}`}
    >
      <h6 className={styles.button_text}>{content}</h6>
    </button>
  );
}
