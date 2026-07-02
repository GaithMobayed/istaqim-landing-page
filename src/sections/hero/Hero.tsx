import { useTranslation } from "react-i18next";
import styles from "./Hero.module.scss";
import logo from "../../assets/app-icon.svg";
import CTA from "../../components/ui/cta/CTA.tsx";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        
        <div className={styles.content}>
          <h1 className={styles.title}>{t("hero.title")}</h1>
          <p className={styles.subtitle}>{t("hero.subtitle")}</p>
          
          <CTA
            primaryKey="hero.cta_primary"
            secondaryKey="hero.cta_secondary"
          />
          
          <span className={styles.support}>{t("hero.support")}</span>
        </div>

        <div className={styles.illustration}>
          <img src={logo} alt="Istqim App Icon" />
        </div>

      </div>
    </section>
  );
}