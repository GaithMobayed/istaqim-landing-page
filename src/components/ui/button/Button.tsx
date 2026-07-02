import styles from './Button.module.scss';
type ButtonProps = {
  type: "primary" | "transparent" | "languageToggle" ;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?:string
};

function Button({onClick ,type , children,className}:ButtonProps) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]} ${className || ''}`} >
            {children}
        </button>
    )
}

export default Button
