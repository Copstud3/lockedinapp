import LockInItem from "./LockInItem"
import styles from "./tasklist.module.css";

export default function TaskList({ lockins, setLockins }) {
  const sortedTasks = lockins.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className={styles.list}>
      <p>Click on tasks to mark as completed</p>
      {sortedTasks.map((task) => (
        <LockInItem key={task.name} task={task} lockins={lockins} setLockins={setLockins}  />
      ))}
    </div>
  );
}
