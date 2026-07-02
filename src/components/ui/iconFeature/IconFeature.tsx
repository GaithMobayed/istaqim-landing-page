import styles from "./IconFeature.module.scss";

interface IconFeatureProps {
  content: string;
  icon: string;
}
export function IconFeature({ content, icon }: IconFeatureProps) {
  return (
    <li className={styles.listItem}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={content} />
      </div>
        <h4 className={styles.text}>{content}</h4>
    </li>
  );
}
