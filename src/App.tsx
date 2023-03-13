import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Form />
        <Table />
      </div>
    </div>
  );
}
