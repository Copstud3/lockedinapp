import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.header}>Lock in!</h2>
    </div>
  );
}
