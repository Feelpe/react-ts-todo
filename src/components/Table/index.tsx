import { Trash } from "@phosphor-icons/react";
import { CheckBox } from "../Checkbox";
import { TaskType } from "../../App";
import styles from "./Table.module.css";

interface taskProps {
  task: TaskType;
  updateTaskStatus: (task: TaskType) => void;
  deleteTask: (id: number) => void;
}

export function Table({ task, updateTaskStatus, deleteTask }: taskProps) {
  return (
    <div className={styles.task}>
      <CheckBox task={task} updateTaskStatus={updateTaskStatus} />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>
        <Trash size={24} weight="bold" />
      </button>
    </div>
  );
}
