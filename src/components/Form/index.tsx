import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Form.module.css";

export function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button>
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
