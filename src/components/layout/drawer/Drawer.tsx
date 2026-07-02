import styles from "./Drawer.module.scss";
import LanguageSwitch from "../../ui/languageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";
import NavLinks from "../../ui/navLinks/navLinks";
import AppLink from "../../ui/appLink/AppLink";
import Logo from "../../ui/logo/Logo";
import ContactLink from "../../ui/contactLink/ContactLink";

export default function Drawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useTranslation();

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`} 
        onClick={onClose} 
      />

      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.content}>

          <div className={styles.header}>
            <Logo className={styles.drawerLogo} />
            <div className={styles.actions}>
            <LanguageSwitch className={styles.drawerLang} />
            <AppLink 
              label={t("nav.openApp")} 
              className={styles.drawerAppBtn} 
            />
          </div>
          </div>

          

          <NavLinks 
            className={styles.mobileLinks} 
            onLinkClick={onClose} 
          />

          <div className={styles.footer}>
            <ContactLink 
              label={t("nav.contact")} 
              className={styles.drawerContactBtn} 
            />
          </div>

        </div>
      </aside>
    </>
  );
}