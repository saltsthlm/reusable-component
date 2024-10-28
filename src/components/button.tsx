import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
};

export function Button({ children, customStyles }: ButtonProps) {
  return (
    <button style={customStyles} className={styles.genericButton}>
      {children}
    </button>
  );
}
