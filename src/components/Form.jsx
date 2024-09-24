import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ lockins, setLockins }) {
  const [lockin, setLockin] = useState({ name: "", done: false });
  function submitAction(w) {
    w.preventDefault();
    setLockins([...lockins, lockin]);
    setLockin({ name: "", done: false });
  }
  return (
    <div>
      <p className={styles.text}>Get Tasks done...</p>
    <form className={styles.taskform} onSubmit={submitAction}>
      <div className={styles.inputContainer}>
        <input
          className={styles.taskInput}
          type="text"
          value={lockin.name}
          onChange={(w) => setLockin({ name: w.target.value, done: false })}
          placeholder="Enter tasks..."
        />
        <button className={styles.addButton}>Add</button>
      </div>
    </form>
    </div>
  );
}
