import Clipboard from "../../images/Clipboard.svg";
import styles from "./Table.module.css";

export function Table() {
  return (
    <div className={styles.table}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <strong>0</strong>
        </div>
        <div>
          <p>Concluídas</p>
          <strong>0</strong>
        </div>
      </header>
      <body>
        <img src={Clipboard} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </body>
    </div>
  );
}
