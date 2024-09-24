import styles from "./lockinitem.module.css";
export default function LockInItem({ task, lockins, setLockins }) {
  function handleDelete(task) {
    console.log("Delete button clicked for the task:", task.name);
    setLockins(lockins.filter((lockin) => lockin !== task));
  }
  function handleClick(name) {
    setLockins(
      lockins.map((lockin) =>
        lockin.name === name ? { ...lockin, done: !lockin.done } : lockin
      )
    );
  }
  const complete = task.done ? styles.completed : "";
  return (
    <div className={styles.task}>
      <div className={styles.taskName}>
        <span className={complete} onClick={() => handleClick(task.name)}>
          {task.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(task)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
