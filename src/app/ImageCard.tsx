import Image, { StaticImageData } from "next/image";
import styles from "./imageCard.module.css";
import Link from "next/link";

interface Props {
  title: string;
  subtitle?: string;
  description: string;
  imgSrc: string | StaticImageData;
  imgAlt?: string;
  href: string;
}

export default function ImageCard({ title, subtitle, description, imgSrc, imgAlt, href }: Props) {
  return (
    <div className={styles.card}>
      <Link href={href} className={styles.image}>
        <Image src={imgSrc} alt={imgAlt || ""} layout="" />
      </Link>
      <div className={styles.content}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
