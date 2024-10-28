import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function Button({ children, customStyles, onClick }: ButtonProps) {
  return (
    <button style={customStyles} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
