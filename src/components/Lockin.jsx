import { useState } from "react";
import Footer from "./Footer"

import Form from "./Form";
import TaskList from "./TaskList";

export default function Lockin() {
  const [lockins, setLockins] = useState([]);
  const completedTasks = lockins.filter((lockin) => lockin.done).length;
  const totalTasks = lockins.length
  return (
    <div>
      <Form lockins={lockins} setLockins={setLockins} />
      <TaskList lockins={lockins} setLockins={setLockins} />
      <Footer completedTasks= {completedTasks} totalTasks= {totalTasks}/>
    </div>
  );
}
