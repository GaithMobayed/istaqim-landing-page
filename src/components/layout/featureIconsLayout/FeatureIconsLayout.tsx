import React from "react";
import styles from "./FeatureIconsLayout.module.scss";
import { IconFeature } from "../../ui/iconFeature/IconFeature";
import { useTranslation } from "react-i18next";

type FeatureItem = {
  content: string;
  icon: string;
};


type FeatureIconsLayoutProps = {
  id?: string;
  questionData: {
    before: string;
    highlight: string;
  };
  answerData: {
    brand?: string;
    before: string;
    highlight?: string;
    after?: string;
  };
  items: FeatureItem[];
  columns?: number;
  description?: string;
};

export default function FeatureIconsLayout({
  id,
  questionData,
  answerData,
  items,
  columns = 4,
  description,
}: FeatureIconsLayoutProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.resolvedLanguage === "ar";

  return (
    <section
      id={id}
      className={`${styles.featureSection} ${isRTL ? styles.rtl : ""}`}
    >
      

      <div className={styles.answer}>
        <h2>
          {answerData.brand && <span>{answerData.brand} </span>}
          {answerData.before} <span>{answerData.highlight}</span>
          {answerData.after}
        </h2>

        <ul
          className={styles.grid}
          style={{ "--grid-cols": columns } as React.CSSProperties}
        >
          {items.map((item, index) => (
            <IconFeature
              key={index}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </ul>

        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
      
      <div className={styles.question}>
        <h2>
          {questionData.before} <span>{questionData.highlight}</span>
        </h2>
      </div>
    </section>
  );
}