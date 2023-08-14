import Link from "next/link";
import styles from "./header.module.css";
import IconButton from "./IconButton";

import InstagramSVG from "@public/icons/instagram.svg";
import LinkedinSVG from "@public/icons/linkedin.svg";
import GithubSVG from "@public/icons/github.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.outer_menu}>
        <section className={styles.logo_container}>
          <Link href="/">
            <h1 className={`${styles.logo} ${styles.purple_pink_gradient}`}>BRIAN PAK</h1>
          </Link>
        </section>
        <section className={styles.items_container}>
          <nav className={styles.menu}>
            <ul>
              <li className={`${styles.item} ${styles.fade_up}`}>
                <Link href="/work">Work</Link>
              </li>
              <li className={`${styles.item} ${styles.fade_up}`}>
                <Link href="/about">About</Link>
              </li>
              <li className={`${styles.item} ${styles.fade_up}`}>
                <Link href="/resume">Resume</Link>
              </li>
            </ul>
          </nav>
          <nav className={styles.socials}>
            <IconButton
              href="https://gatech.joinhandshake.com/stu/users/37132762"
              src={InstagramSVG}
              alt="Instagram"
              width={30}
            />
            <IconButton
              href="https://www.linkedin.com/in/brianpakk/"
              src={LinkedinSVG}
              alt="LinkedIn"
              width={30}
            />
            <IconButton
              href="https://github.com/brianpak2402"
              src={GithubSVG}
              alt="Github"
              width={30}
            />
          </nav>
        </section>
      </div>
    </header>
  );
}
