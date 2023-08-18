import GradientTitle from "@components/GradientTitle/GradientTitle";
import ResumeItem from "@components/ResumeItem/ResumeItem";
import DownloadButton from "@components/DownloadButton/DownloadButton";
import Header from "@components/shared/Header/Header";

import styles from "./page.module.css";

export default function Resume() {
  return (
    <main className={styles.main}>
      <Header orientation="HORIZONTAL" />
      <div className={styles.content}>
        <section className={styles.heading}>
          <div>
            <GradientTitle
              content="Brian Pak"
              fontSize="2.25rem"
              gradientFrom="#a855f7"
              gradientTo="#f472b6"
            />
            <h3>Software Engineering Intern & Student</h3>
          </div>
          <div className={styles.contacts}>
            <p>📩: brianpak2402@gmail.com</p>
            <p>📲: 678-641-5035</p>
            <p>🏡: Atlanta, GA</p>
          </div>
        </section>
        <section className={styles.resume_section}>
          <h3>Education</h3>
          <div className={styles.resume_items}>
            <ResumeItem
              title="Georgia Tech"
              gradient={{
                gradientFrom: "#b3a369",
                gradientTo: "#fbbf24",
              }}
              icon="🐝"
              role="B.S. Computer Science"
              dates="Aug 2020 - May 2024"
              location="Atlanta, GA"
              content={["Threads: Intelligence & Media"]}
              isList={false}
            />
          </div>
        </section>
        <section className={styles.resume_section}>
          <h3>Experience</h3>
          <div className={styles.resume_items}>
            <ResumeItem
              title="Ridgeline"
              gradient={{
                gradientFrom: "#104385",
                gradientTo: "#50b2a6",
              }}
              icon="⛰️"
              role="Software Engineer Intern"
              dates="Jun 2023 - Aug 2023"
              location="Incline Village, NV"
              content={[
                "Prototyped a GraphQL-based trade alert notification service with Amazon SNS and AWS Lambda to support over 600 traders when tending to over $2 million in critical transactions.",
                "Deployed over five scalable APIs for maintaining sound effects and alert preferences using AWS S3, Amazon RDS, and Python, currently in use to scale the notification service to the entire application.",
                "Constructed the user interface for the application’s trade notification settings page using React and Typescript, resulting in a seamless user experience and streamlined customization of alert preferences.",
              ]}
              isList={true}
            />
            <ResumeItem
              title="GT Robotic Musicianship Lab"
              gradient={{
                gradientFrom: "#fbbf24",
                gradientTo: "#60a5fa",
              }}
              icon="🎵"
              role="Student Software Developer"
              dates="Jan 2023 - Present"
              location="Atlanta, GA"
              content={[
                "Reconstructed the user interface from deprecated Vue to React Typescript for the web-interface of Mixboard, a mobile app that provides users with the ability to combine multiple song tracks.",
                "Integrated HTML Drag & Drop API to enable seamless movement of Spotify tracks when combining songs across the web interface.",
                "Developed the user interface using Chakra UI, enabling stakeholders to swiftly visualize the new interface and provide valuable feedback.",
              ]}
              isList={true}
            />
            <ResumeItem
              title="WebDev @ GT"
              gradient={{
                gradientFrom: "#f87171",
                gradientTo: "#fb923c",
              }}
              icon="💻"
              role="Technical Lead"
              dates="Jan 2023 - May 2023"
              location="Atlanta, GA"
              content={[
                "Constructed over 17 RESTful API endpoints through Amazon API Gateway and Node.js to manage user and virtual jukebox data on a DynamoDB database.",
                "Introduced over 11 automated unit test suites using Playwright and Vitest to support the application’s CI/CD pipeline, helping detect errors in new pull requests.",
                "Migrated the application’s user interface to Next.js, leveraging server-side rendering techniques to reduce page-load times by 9%.",
                "Implemented OAuth Authorization Code Flow with PKCE Extension to securely verify a host user’ Spotify account before beginning a music session.",
              ]}
              isList={true}
            />
          </div>
        </section>
        <section className={styles.footing}>
          <DownloadButton content="Download a Copy" file="Pak_Brian_Resume.pdf" />
        </section>
      </div>
    </main>
  );
}
