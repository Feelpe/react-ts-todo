import { Trash } from "@phosphor-icons/react";

import { CheckBox } from "../Checkbox";
import Clipboard from "../../images/Clipboard.svg";
import styles from "./Table.module.css";

export function Table() {
  return (
    <section className={styles.list}>
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
        <div>
          <CheckBox />
          <p>
            oi tudo bom Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.
          </p>
          <button>
            <Trash size={24} weight="bold" />
          </button>
        </div>
      </body>
      <footer>
        <img src={Clipboard} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </footer>
    </section>
  );
}
