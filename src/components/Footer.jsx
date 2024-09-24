import styles from "./footer.module.css";

export default function Footer({ completedTasks, totalTasks }) {
  return (
    <>
      <a
        href="https://linktr.ee/iam_chris"
        target="_blank"
        className={styles.footerNote}
      >
        Made by: Iam_chris
      </a>
      <div className={styles.footer}>
        <span className={styles.footerItem}>
          Completed Tasks: {completedTasks}
        </span>
        <span className={styles.footerItem}>Total Tasks: {totalTasks}</span>
      </div>
    </>
  );
}
