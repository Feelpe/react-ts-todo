import { Trash } from "@phosphor-icons/react";
import { CheckBox } from "../Checkbox";
import { taskType } from "../../App";
import styles from "./Table.module.css";

interface taskProps {
  task: taskType;
  deleteTask: (id: number) => void;
}

export function Table({ task, deleteTask }: taskProps) {
  return (
    <div className={styles.task}>
      <CheckBox />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>
        <Trash size={24} weight="bold" />
      </button>
    </div>
  );
}
