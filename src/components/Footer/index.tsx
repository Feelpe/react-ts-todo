import styles from "./Footer.module.css";
import Clipboard from "../../images/Clipboard.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Clipboard} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </footer>
  );
}
