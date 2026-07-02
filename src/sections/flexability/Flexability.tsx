import styles from "./Flexability.module.scss";
import { useTranslation } from "react-i18next";

export default function Flexability() {
  const { t } = useTranslation();

  return (
    <section id="flexability" className={styles.flexibilitySection}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>{t("flexibility.title")}</h2>
          <ul>
            <li>{t("flexibility.lines.line1")}</li>
            <li>{t("flexibility.lines.line2")}</li>
            <li>{t("flexibility.lines.line3")}</li>
          </ul>
        </div>

        <div className={styles.visual}>
          <ConfigCard
            title={t("flexibility.cards.a.title")}
            items={[
              {
                label: t("flexibility.cards.a.items.tasks"),
                active: true,
              },
              {
                label: t("flexibility.cards.a.items.quran"),
                active: true,
              },
              {
                label: t("flexibility.cards.a.items.lessons"),
                active: false,
              },
            ]}
            t={t}
          />

          <ConfigCard
            title={t("flexibility.cards.b.title")}
            items={[
              {
                label: t("flexibility.cards.b.items.lessons"),
                active: true,
              },
              {
                label: t("flexibility.cards.b.items.attendance"),
                active: true,
              },
              {
                label: t("flexibility.cards.b.items.points"),
                active: true,
              },
            ]}
            t={t}
          />

          <ConfigCard
            title={t("flexibility.cards.c.title")}
            items={[
              {
                label: t("flexibility.cards.c.items.quranOnly"),
                active: true,
              },
              {
                label: t("flexibility.cards.c.items.points"),
                active: false,
              },
              {
                label: t("flexibility.cards.c.items.tasks"),
                active: false,
              },
            ]}
            t={t}
          />
        </div>
      </div>
    </section>
  );
}

function ConfigCard({
  title,
  items,
  t,
}: {
  title: string;
  items: { label: string; active: boolean }[];
  t: (key: string) => string;
}) {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>

      {items.map((item, i) => (
        <div key={i} className={styles.row}>
          <span>{item.label}</span>
          <span className={item.active ? styles.on : styles.off}>
            {item.active
              ? t("flexibility.status.on")
              : t("flexibility.status.off")}
          </span>
        </div>
      ))}
    </div>
  );
}
