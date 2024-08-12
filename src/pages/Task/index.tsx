import { useEffect, useState } from "react";
import { Button, Card, Search, FormAddNote } from "../../components";
import styles from "./Tasks.module.scss";
import { TaskProps } from "../../types/Task";
import { api } from "../../service/api.service";
import axios from "axios";

interface TitleProps {
  title: string
}
const Title = ({ title }: TitleProps) => {
  return <p className={styles.TitleTask}>{title}</p>
}

const TasksPage = () => {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    loadTask();

  }, [])


  async function loadTask() {
    const response = await api.get("/task")
    setTask(response.data)
    console.log(response)
  }





  return (
    <div className={styles.Tasks}>

      <header className={styles.header}>



        <nav>
          <div className={styles.menu}>
            <div className={styles.logo}>
              <img src="/img/logo.svg" alt="Logotipo" />
            </div>

            <div className={styles.title}>CoreNotes</div>

            <div className={styles.search}>
              <Search placeholder="Pesquisar notas" value={search} onChange={() => { }} />
            </div>
          </div>

        </nav>

        <img src="/img/remove.svg" alt="Remover" className={styles.remove} />

      </header>

      <FormAddNote />


      <Title title="Favoritos" />
      <main className={styles.main}>

        { task && task.map((value) => <Card key={value.id} data={value}/>)}
      </main>

  



    </div>
  );
};

export default TasksPage;
