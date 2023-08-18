import Header from "@components/shared/Header/Header";
import styles from "./page.module.css";

import Title from "@components/Title/Title";
import ImageCard from "@components/ImageCard/ImageCard";

import { Experiences } from "../data";
import { useId } from "react";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header orientation="VERTICAL" />
      <main className={styles.main}>
        <Title
          content="👋🏻 I'm Brian, an aspiring software engineer experienced in enterprise FinTech, Music Technology, and Cello Performance."
          margin="0 0 4.5rem 0"
        />
        <Title
          content="📍 Currently in Atlanta, GA building cloud solutions for enterprise FinTech and crafting user interfaces at the forefront of music technology research."
          margin="0 0 4.5rem 0"
        />
        <Title content="⤵️ View my work below:" margin="0 0 5rem 0" />
        {Experiences.map(item => (
          <ImageCard
            title={item.organization}
            subtitle={item.position}
            description={item.description}
            imgSrc={item.image}
            href={item.url}
            key={useId()}
          />
        ))}
      </main>
    </div>
  );
}
