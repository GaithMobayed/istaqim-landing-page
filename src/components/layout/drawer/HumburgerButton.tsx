import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import styles from './HumburgerButton.module.scss';

interface Props {
  isOpen: boolean;
  isTop: boolean;
  toggle: () => void;
}

export default function HumburgerButton({ isOpen, toggle,isTop }: Props) {
  return (
    <div className={styles.actions}>
      <button
        className={`${styles.menuIcon} ${isOpen ? styles.active : ""} ${!isTop ? styles.primaryColor : ""}`}
        onClick={toggle}
        aria-label="Toggle Menu"
      >
        {isOpen ? <IoCloseSharp size={28}  /> : <IoMenuSharp size={28}  />}
      </button>
    </div>
  );
}