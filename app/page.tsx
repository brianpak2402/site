"use client";

import AnimatedLink from "@components/custom/AnimatedLink";
import ExperienceCard from "@components/custom/ExperienceCard";
import ProjectCard from "@components/custom/ProjectCard";
import MixboardImage from "@public/Mixboard_Image.png";

export default function Home() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="about"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-transparent px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4 lg:text-lg">
            Coming from 7 years of studying cello performance, I began my path
            to a career in software development when I decided to pursue a
            degree in computer science in late 2021. I often found myself in
            rabbit holes at the time trying to figure out how metronome apps
            worked, and I wanted to try my hand in replicating these apps. My
            attempts were not successful, but I've since had the wonderful
            opportunity to expand on this passion at both my school and in the
            industry.
          </p>
          <p className="mb-4 lg:text-lg">
            My main commitments these days revolve around leading music
            technology projects at the Georgia Institute of Technology. I'm also
            exploring machine learning in preparation of adding AI-driven
            features to my own personal projects.
          </p>
          <p className="mb-4 lg:text-lg">
            When I'm not at the computer, you'll find me learning new recipes in
            the kitchen, shopping at thrift stores, or coffee hopping with
            friends.
          </p>
        </div>
      </section>
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-transparent px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol>
            <li className="mb-12">
              <ExperienceCard
                dates="Jun 2023 - Aug 2023"
                description="Designed and launched a high-throughput notification system for trade alerts, enabling traders to receive real-time audio feedback on pre-specified transactions."
                hoverColor="teal-300"
                role="Software Engineer Intern"
                technologies={[
                  "React",
                  "Typescript",
                  "Python",
                  "AWS Lambda",
                  "Amazon S3",
                  "Amazon RDS",
                  "AWS SNS",
                ]}
                title="Ridgline Apps"
                url="https://www.ridgelineapps.com"
              />
            </li>
            <li className="mb-12">
              <ExperienceCard
                dates="Jan 2023 - Current"
                description="Spearheading the revival of the web client for the lab's famed AI-based DJ app: Mixboard. Providing improvements to a global network of beta testers through knowledge shares and collaboration across multiple teams."
                hoverColor="yellow-600"
                role="Student Software Developer"
                technologies={[
                  "React",
                  "Typescript",
                  "Web Audio API",
                  "Firebase",
                  "Python",
                ]}
                title="Georgia Tech Center for Music Technology"
                url="https://gtcmt.gatech.edu/"
              />
            </li>
          </ol>
          <div className="mt-12">
            <AnimatedLink
              href="Pak_Brian_Resume.pdf"
              text="View Full Résumé"
              variant="right"
            />
          </div>
        </div>
      </section>
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-transparent px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>
        <div>
          <ul>
            <li className="mb-12">
              <ProjectCard
                description="Web app that separates audio tracks into chords, bass, vocals, and drum parts for users to mix together on a drag-and-drop interface. Create mashups and share them with your friends!"
                href="https://research.gatech.edu/new-app-uses-ai-enable-anyone-make-musical-mashups"
                imageSrc={MixboardImage}
                technologies={[
                  "React",
                  "Typescript",
                  "HTML Drag & Drop API",
                  "Chakra UI",
                  "Flask",
                  "Python",
                ]}
                title="Mixboard"
              />
            </li>
            <li className="mb-12">
              <ProjectCard
                description="Web app for hosting virtual jukebox sessions on the cloud. Hosts can connect their Spotify account and share a PIN that allows others to upvote, downvote, and add songs to a public song queue at social events."
                href="https://www.rocola.it"
                imageSrc=""
                technologies={[
                  "React",
                  "Next",
                  "Typescript",
                  "Node.js",
                  "DynamoDB",
                  "AWS Lambda",
                ]}
                title="Rocola"
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
