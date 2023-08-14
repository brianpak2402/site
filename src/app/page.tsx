import Header from "./Header";
import Title from "./Title";
import ImageCard from "./ImageCard";
import styles from "./page.module.css";

import RidgelineLogo from "../../public/RidglineLogo.svg";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
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
        <ImageCard
          title="Ridgeline"
          subtitle="Software Engineer Intern"
          description="hello"
          imgSrc={RidgelineLogo}
          href="https://www.ridgelineapps.com/"
        />
      </main>
    </div>
  );
}
