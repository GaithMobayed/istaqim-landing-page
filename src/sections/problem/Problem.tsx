import styles from "./Problem.module.scss";
import { useTranslation } from "react-i18next";
import tasksIcon from "../../assets/icons/weeklytasks.svg";
function Problem() {
  return (
    <section id="problems" className={styles.problem}>
      <Heading></Heading>
      <Grid></Grid>
      
    </section>
  );
}

export default Problem;

function Heading() {
  const { t } = useTranslation();
  return (
    <div className={styles.heading}>
      <div>
        <h2>{t("problem.title")}</h2>
        <p>{t("problem.description")}</p>
      </div>
      <h3>{t("problem.subtitle")}</h3>
    </div>
  );
}

function Grid() {
  const { t } = useTranslation();
  const problems = [
    {
      icon:tasksIcon,
      title: "problem.cards.attendance.title",
      desc: "problem.cards.attendance.desc",
    },
    {
      icon:tasksIcon,
      title: "problem.cards.progress.title",
      desc: "problem.cards.progress.desc",
    },
    {
      icon:tasksIcon,
      title: "problem.cards.structure.title",
      desc: "problem.cards.structure.desc",
    },
    {
      icon:tasksIcon,
      title: "problem.cards.workload.title",
      desc: "problem.cards.workload.desc",
    },
  ];

  return (
    <div className={styles.grid}>
      {problems.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={t(item.title)}
          desc={t(item.desc)}
        />
      ))}
    </div>
  );
}


interface CardProps {
  icon: string;
  title: string;
  desc: string;
}

function Card({ icon, title, desc }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <img src={icon} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}


