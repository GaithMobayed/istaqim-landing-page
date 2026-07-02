import { useTranslation } from "react-i18next";
import styles from './CTA.module.scss'
import Button from "../button/Button";

type CTAprops = {
  className?: string;
  primaryKey: string;
  secondaryKey: string;
};
export default function CTA({ className, primaryKey, secondaryKey }: CTAprops) {
  const { t } = useTranslation();

  return (
    <div className={`${styles.buttons} ${className ?? ""}`}>
      <Button type="primary">{t(primaryKey)}</Button>
      <Button type="transparent">
        {t(secondaryKey)}
      </Button>
    </div>
  );
}
