import { useTranslation } from "react-i18next";
import Button from "../button/Button";

export default function LanguageSwitch({className}:{className?:string}) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <Button type="languageToggle" className={className} onClick={toggleLanguage}>{i18n.language === "ar" ? "en" : "ar"}</Button>
  );
}