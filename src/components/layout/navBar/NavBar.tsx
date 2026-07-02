import styles from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useScrollNavbar } from "../../../utils/useScrollNavbar";
import LanguageSwitch from "../../ui/languageSwitch/LanguageSwitch";
import HumburgerButton from "../drawer/HumburgerButton";
import Drawer from "../drawer/Drawer";
import NavLinks from "../../ui/navLinks/navLinks";
import AppLink from "../../ui/appLink/AppLink";
import Logo from "../../ui/logo/Logo";
import ContactLink from "../../ui/contactLink/ContactLink";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation();
  const { isTop, visible } = useScrollNavbar();

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "unset";
  }, [isDrawerOpen]);

  const navClass = `
    ${styles.navBar} 
    ${isTop ? styles.transparent : styles.sticky} 
    ${!visible ? styles.hide : ""}
  `.trim();

  return (
    <>
      <nav className={navClass}>
        <div className={styles.container}>
          <div className={styles.logoGroup}>
            <Logo className={styles.logo} />
            <AppLink label={t("nav.openApp")} className={styles.appLink} />
          </div>

          <HumburgerButton
            isOpen={isDrawerOpen}
            isTop={isTop}
            toggle={() => setIsDrawerOpen(!isDrawerOpen)}
          />

          <NavLinks className={styles.navLinks} />

          <div className={styles.actions}>
            <LanguageSwitch className={styles.languageSwitch} />
            <ContactLink label={t("nav.contact")} className={styles.contactBtn} />
          </div>
        </div>
      </nav>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}