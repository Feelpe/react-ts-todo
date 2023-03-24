import styles from "./StatusBar.module.css";

interface StatusBarProps {
  created: number;
  completed: number;
}

export function StatusBar({ created, completed }: StatusBarProps) {
  return (
    <section className={styles.status}>
      <div>
        <p>Tarefas criadas</p>
        <strong>{created}</strong>
      </div>
      <div>
        <p>Concluídas</p>
        <strong>{completed}</strong>
      </div>
    </section>
  );
}
