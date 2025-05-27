"use client";

import { AnimatedLink, ExperienceCard, ProjectCard } from "@components/custom";
import Section from "@containers/Section";
import MixboardImage from "@public/Mixboard_screenshot.png";
import RocolaImage from "@public/Rocola_screenshot.png";

export default function Home() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <Section title="About">
        <p className="mb-4 lg:text-lg">
          After seven years studying cello performance, I began my journey into
          software development in late 2021. I was often drawn into rabbit holes
          trying to understand how metronome apps worked, which sparked my
          interest in building them myself. Since then, I have been fortunate to
          grow this passion through both academic and industry experiences.
        </p>
        <p className="mb-4 lg:text-lg">
          You'll find me experimenting with new latte art, sitting in at live
          jazz clubs , or shopping around the area for something new to wear.
        </p>
      </Section>
      <Section title="Experience">
        <ol>
          <li className="mb-5">
            <ExperienceCard
              dates="July 2024 - Current"
              description="Driving new product enhancements & relieving tech debt for the Portfolio Accounting - Core team."
              hoverColor="teal"
              role="Software Engineer"
              technologies={[
                "React",
                "Spring Boot",
                "Typescript",
                "Kotlin",
                "PostgreSQL",
              ]}
              title="Ridgline Apps"
              url="https://www.ridgelineapps.com"
            />
          </li>
          <li className="mb-5">
            <ExperienceCard
              dates="Jun 2023 - Aug 2023"
              description="Designed and launched a high-throughput notification service for trade alerts, enabling traders to receive preset audio feedback on real-time financial transactions."
              hoverColor="teal"
              role="Software Engineer Intern"
              technologies={[
                "React",
                "Typescript",
                "Python",
                "AWS Lambda",
                "Amazon S3",
                "Amazon RDS",
              ]}
              title="Ridgline Apps"
              url="https://www.ridgelineapps.com"
            />
          </li>
          <li className="mb-5">
            <ExperienceCard
              dates="Jan 2023 - May 2024"
              description="Revived the web client for Georgia Tech Center for Music Technology's famed AI-based DJ app: Mixboard. Delivered product enhancements to a global network of 200 beta testers through knowledge shares and collaboration across multiple teams."
              hoverColor="yellow"
              relatedLinks={[
                {
                  href: "https://research.gatech.edu/new-app-uses-ai-enable-anyone-make-musical-mashups",
                  name: "Mixboard Article",
                },
              ]}
              role="Student Software Developer"
              technologies={[
                "React",
                "Typescript",
                "Web Audio API",
                "Firebase",
                "Python",
                "Flask",
                "Redis",
              ]}
              title="Georgia Tech Center for Music Technology"
              url="https://gtcmt.gatech.edu/"
            />
          </li>
        </ol>
        <div className="mt-12">
          <AnimatedLink
            arrowDirection="right"
            href="Pak_Brian_Resume.pdf"
            text="View Full Résumé"
          />
        </div>
      </Section>
      <Section title="Projects">
        <ul>
          <li className="mb-5">
            <ProjectCard
              description="Web app that separates audio tracks into chords, bass, vocals, and drum parts for users to mix together on a drag-and-drop interface. Create mashups and share them with your friends!"
              href="http://130.207.85.80/"
              imageSrc={MixboardImage}
              technologies={[
                "React",
                "HTML Drag & Drop API",
                "Chakra UI",
                "Flask",
                "Python",
              ]}
              title="Mixboard"
            />
          </li>
          <li className="mb-5">
            <ProjectCard
              description="Website for hosting virtual jukebox sessions on the cloud. Hosts can connect their Spotify account and share a PIN that allows others to upvote, downvote, and add songs to a public song queue at social events."
              href="https://www.rocola.it"
              imageSrc={RocolaImage}
              technologies={[
                "React",
                "Next.js",
                "Typescript",
                "Node",
                "DynamoDB",
                "AWS Lambda",
              ]}
              title="Rocola"
            />
          </li>
        </ul>
      </Section>
    </main>
  );
}
