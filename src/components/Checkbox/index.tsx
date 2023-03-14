import { Check } from "@phosphor-icons/react";
import * as Checkbox from "@radix-ui/react-checkbox";

import styles from "./Checkbox.module.css";

export function CheckBox() {
  return (
    <Checkbox.Root className={`${styles.checkbox} ${styles.uncheck}`}>
      <Checkbox.Indicator>
        <Check size={14} className={styles.check} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
