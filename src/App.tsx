import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { StatusBar } from "./components/StatusBar";
import { Footer } from "./components/Footer";

import styles from "./App.module.css";

export interface TaskType {
  id: number;
  text: string;
  status: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const createTask = {
      id: tasks.length + 1,
      text: newTask,
      status: false,
    };

    setTasks([...tasks, createTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function updateTaskStatus(task: TaskType) {
    const taskFiltered = tasks.filter((taskToFilter) => {
      task.id !== taskToFilter.id;
    });

    const updatedTask = {
      id: task.id,
      text: task.text,
      status: task.status,
    };

    setTasks([...taskFiltered, updatedTask]);
  }

  function deleteTask(taskIdToDelete: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskIdToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const completedTasks = tasks.filter((task) => {
    return task.status === true;
  });

  return (
    <>
      <Header />

      <div className={styles.container}>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Adicionar uma nova task"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
          />
          <button onClick={handleCreateNewTask}>
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </form>
        <main>
          <StatusBar created={tasks.length} completed={completedTasks.length} />
          {tasks.length ? (
            <article>
              {tasks.map((task) => (
                <Table
                  task={task}
                  updateTaskStatus={updateTaskStatus}
                  deleteTask={deleteTask}
                />
              ))}
            </article>
          ) : (
            <Footer />
          )}
        </main>
      </div>
    </>
  );
}
