import styles from "./resumeItem.module.css";

import GradientTitle from "@components/GradientTitle/GradientTitle";

interface Props {
  title: string;
  icon?: string;
  role: string;
  dates: string;
  location: string;
  content: string[];
  isList: boolean;
  gradient: {
    gradientFrom: string;
    gradientTo: string;
  };
}

export default function ResumeItem({
  title,
  icon,
  role,
  dates,
  location,
  content,
  isList,
  gradient,
}: Props) {
  return (
    <div className={styles.resume_item}>
      <span className={styles.item_heading}>
        <div className={styles.item_heading_left}>
          <div className={styles.item_title}>
            <GradientTitle
              content={title}
              fontSize="1.5rem"
              gradientFrom={gradient.gradientFrom}
              gradientTo={gradient.gradientTo}
            />
            {icon}
          </div>
          <h5>{role}</h5>
        </div>
        <div className={styles.item_heading_right}>
          <h5>{dates}</h5>
          <h5>{location}</h5>
        </div>
      </span>
      <span className={styles.resume_item_content}>
        {isList ? (
          <ul className={styles.content_list}>
            {content.map(item => (
              <li className={styles.content_text}>{item}</li>
            ))}
          </ul>
        ) : (
          <>
            {content.map(item => (
              <p className={styles.content_text}>{item}</p>
            ))}
          </>
        )}
      </span>
    </div>
  );
}
