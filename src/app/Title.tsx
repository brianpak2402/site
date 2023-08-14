import styles from "./title.module.css";

interface Props {
  content: string;
  margin?: string;
}

export default function Title({ content, margin }: Props) {
  return (
    <h2
      className={styles.title}
      style={{
        margin: margin,
      }}
    >
      <span>{content}</span>
    </h2>
  );
}
