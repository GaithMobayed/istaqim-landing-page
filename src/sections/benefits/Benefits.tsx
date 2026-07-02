import { useTranslation } from "react-i18next";
import checkIcon from "../../assets/icons/attendance.svg";
import FeatureIconsLayout from "../../components/layout/featureIconsLayout/FeatureIconsLayout";

export default function Benefits() {
  const { t } = useTranslation();

  const benefits = [
    t("benefits.items.noSpreadsheets"),
    t("benefits.items.visibility"),
    t("benefits.items.flexible"),
    t("benefits.items.scales"),
    t("benefits.items.organized"),
  ];

  const benefitsItems = benefits.map(item => ({ content: item, icon: checkIcon }));
  return (

<FeatureIconsLayout 
  id="benefits"
  columns={5}
  questionData={{ before: t("benefits.question.before"), highlight: t("benefits.question.highlight") }}
  answerData={{ before: t("benefits.title.before"), highlight: t("benefits.title.highlight") }}
  items={benefitsItems}
/>
  );
}