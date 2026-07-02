import styles from "./HowItWorks.module.scss";
import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t ,i18n} = useTranslation();
  const isRTL = i18n.resolvedLanguage === "ar";
  

  const steps = [
    {
      title: t("howItWorks.steps.setup.title"),
      desc: t("howItWorks.steps.setup.desc"),
    },
    {
      title: t("howItWorks.steps.invite.title"),
      desc: t("howItWorks.steps.invite.desc"),
    },
    {
      title: t("howItWorks.steps.run.title"),
      desc: t("howItWorks.steps.run.desc"),
    },
    {
      title: t("howItWorks.steps.monitor.title"),
      desc: t("howItWorks.steps.monitor.desc"),
    },
  ];

  return (
    <section id="howItWorks" className={styles.section}>
      <div className={styles.header}>
        <h2>{t("howItWorks.title")}</h2>
        <p>{t("howItWorks.subtitle")}</p>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.circle}>{index + 1}</div>

            {index !== steps.length - 1 && <div className={`${styles.line} ${isRTL? styles.arabicLine : ""}`} />}

            <div className={styles.content}>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}