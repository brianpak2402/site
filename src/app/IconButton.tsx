import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

interface Props {
  href: string;
  src: any;
  alt?: string;
  width: number;
}

export default function IconButton({ href, src, alt, width }: Props) {
  return (
    <Link href={href} className={styles.fade_up}>
      <Image src={src} alt={alt || ""} width={width} height={width} />
    </Link>
  );
}
