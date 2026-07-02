import { useTranslation } from "react-i18next";
import attendanceIcon from "../../assets/icons/attendance.svg";
import tasksIcon from "../../assets/icons/weeklytasks.svg";
import quranIcon from "../../assets/icons/memorize.svg";
import lessonIcon from "../../assets/icons/structueLesson.svg";
import FeatureIconsLayout from "../../components/layout/featureIconsLayout/FeatureIconsLayout";

const items = [
  { key: "attendance", icon: attendanceIcon },
  { key: "tasks", icon: tasksIcon },
  { key: "quran", icon: quranIcon },
  { key: "lessons", icon: lessonIcon },
];

export default function Solution() {
  const { t } = useTranslation();

  const solutionItems = items.map((item) => ({
    content: t(`solution.items.${item.key}`),
    icon: item.icon,
  }));

  return (
    <FeatureIconsLayout
      id="solution"
      columns={4}
      questionData={{
        before: t("solution.question.before"),
        highlight: t("solution.question.highlight"),
      }}
      answerData={{ brand: t("solution.brand"), before: t("solution.title") }}
      items={solutionItems}
      description={t("solution.description")}
    />
  );
}
