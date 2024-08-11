import { useEffect, useState } from "react";
import { Button, Card, Search, FormAddNote } from "../../components";
import styles from "./Tasks.module.scss";
import { TaskProps } from "../../types/Task";

interface TitleProps {
  title: string
}
const Title = ({ title }: TitleProps) => {
  return <p>{title}</p>
}

const TasksPage = () => {
  const [vehicles, setVehicles] = useState<TaskProps[]>([]);
  const [search, setSearch] = useState<string>("");




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

        <Card />
        <Card />
        <Card />
        <Card />

      </main>
    </div>
  );
};

export default TasksPage;
