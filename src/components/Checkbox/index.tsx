import { Check } from "@phosphor-icons/react";
import * as Checkbox from "@radix-ui/react-checkbox";

import styles from "./Checkbox.module.css";
import { TaskType } from "../../App";

interface CheckBoxProps {
  task: TaskType;
  updateTaskStatus: (task: TaskType) => void;
}

export function CheckedBox({ task, updateTaskStatus }: CheckBoxProps) {
  return (
    <Checkbox.Root
      checked={task.status}
      className={`${styles.checkbox} ${styles.checked}`}
      onCheckedChange={() => updateTaskStatus(task)}
    >
      <Checkbox.Indicator>
        <Check size={14} className={styles.check} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

export function UnCheckBox({ task, updateTaskStatus }: CheckBoxProps) {
  return (
    <Checkbox.Root
      checked={task.status}
      className={`${styles.checkbox} ${styles.uncheck}`}
      onCheckedChange={() => updateTaskStatus(task)}
    >
      <Checkbox.Indicator>
        <Check size={14} className={styles.check} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
