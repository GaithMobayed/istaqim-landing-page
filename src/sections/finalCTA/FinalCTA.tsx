import CTA from "../../components/ui/cta/CTA";
import styles from "./FinalCTA.module.scss";
import { useTranslation } from "react-i18next";

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section id="cta" className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>{t("cta.title")}</h2>
        <CTA
          primaryKey="cta.buttons.demo"
          className={styles.actions}
          secondaryKey="cta.buttons.contact"
        />
        <p>{t("cta.text")}</p>
      </div>
    </section>
  );
}
