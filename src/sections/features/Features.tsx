import styles from "./Features.module.scss";
import { useTranslation } from "react-i18next";
import quranIcon from "../../assets/icons/memorize.svg";
import attendanceIcon from "../../assets/icons/attendance.svg";
import lessonIcon from "../../assets/icons/structueLesson.svg";
import pointsIcon from "../../assets/icons/structueLesson.svg";
import notifyIcon from "../../assets/icons/structueLesson.svg";
import Divider from "../../components/ui/divider/Divider";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      key: "features.items.tasks",
      icon: quranIcon,
    },
    {
      key: "features.items.quran",
      icon: quranIcon,
    },
    {
      key: "features.items.attendance",
      icon: attendanceIcon,
    },
    {
      key: "features.items.lessons",
      icon: lessonIcon,
    },
    {
      key: "features.items.points",
      icon: pointsIcon,
    },
    {
      key: "features.items.notifications",
      icon: notifyIcon,
    },
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.header}>
        <h2>{t("features.title")}</h2>
        <p>{t("features.subtitle")}</p>
      </div>

      <div className={styles.list}>
        {features.map((feature, index) => {
          const data = t(feature.key, { returnObjects: true }) as {
            title: string;
            desc: string;
          };

          return (
            <>
            <Feature
              key={index}
              title={data.title}
              desc={data.desc}
              icon={feature.icon}
              reverse={index % 2 === 1}
            />
            {index != features.length-1 ? <Divider /> : ""}</>
          );
        })}
      </div>
    </section>
  );
}

function Feature({
  title,
  desc,
  icon,
  reverse,
}: {
  title: string;
  desc: string;
  icon: string;
  reverse?: boolean;
}) {
  return (
    <div className={`${styles.feature} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <div
        className={`${styles.visual} ${reverse ? styles.visualReverse : ""}`}
      >
        <div className={styles.iconBox}>
          <img src={icon} alt={title} />
        </div>
      </div>
    </div>
  );
}
