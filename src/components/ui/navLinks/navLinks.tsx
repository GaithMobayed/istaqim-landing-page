import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  onLinkClick?: () => void;
}

export default function NavLinks({ className, onLinkClick }: Props) {
  const { t } = useTranslation();
  const links = [
    { id: "problems", label: t("nav.problems") },
    { id: "solution", label: t("nav.solution") },
    { id: "features", label: t("nav.features") },
    { id: "howItWorks", label: t("nav.how") },
    { id: "benefits", label: t("nav.benefits") },
  ];

  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.id}>
          <a href={`#${link.id}`} onClick={onLinkClick}>
            {link.label}
          </a>
        
        </li>
      ))}
    </ul>
  );
}