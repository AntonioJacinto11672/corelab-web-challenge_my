import { useCallback, useEffect, useState } from "react";
import { Button, Card, Search, FormAddNote } from "../../components";
import styles from "./Tasks.module.scss";
import { TaskProps } from "../../types/Task";
import { FormEvent, useRef } from "react";
import "../../components/FormAddNote/formAddNote.scss"
import { api } from "../../service/api.service";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardColor from "../../components/Card/CardColor";
import CardColorItems from "../../components/Card/CardColorItems";



interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return <p className={styles.TitleTask}>{title}</p>
}

const TasksPage = () => {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const nameRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null)
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    loadTask();

  }, [])


  async function loadTask() {
    const response = await api.get("/task")
    setTask(response.data)
    console.log(response)
  }



  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!nameRef.current?.value || !descriptionRef.current?.value) return


    const response = await api.post("/task", {
      title: nameRef.current.value,
      description: descriptionRef.current.value,
      isFavorite: isFavorite
    })


    /*  setTask(prev => [...prev, response.data]) */
    loadTask()
    console.log("Os Dados ", response)
    nameRef.current.value = ''
    descriptionRef.current.value = ''
  }

  async function handleDelete(id: string) {
    try {
      console.log("Vai Apagar")
      await api.delete("/task", {
        params: {
          id: id
        }
      })

      console.log("Id do log", id)

      const allTask = task.filter((task) => task.id !== id)
      setTask(allTask)
    } catch (error) {

    }
  }


  async function handleisFavorito(id: string) {
    try {

      console.log("Vai Editar ", id)

      const response = await api.put("/task/favorite", {
        id: id
      })

      //console.log("Responsta", response)

      loadTask()

      if (response.data) {

      }

    } catch (error) {

    }
  }


  const toggleOpen = useCallback((cardId: string) => {
    setOpenCardId((prevId) => (prevId === cardId ? null : cardId)); // Muda o ID do cartão aberto ou fecha se for o mesmo
  }, []);

  const ToggleIsFavorite = useCallback(() => {
    setIsFavorite((prev) => !prev)
  }, [])

  async function handleCorlor(id: string, color: string) {
    try {

      console.log("Vai Editar ", color)

      const response = await api.put("/task/color", {
        id: id,
        color: color,
      })

      //console.log("Responsta", response)

      loadTask()

      if (response.data) {

      }

    } catch (error) {

    }
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

      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="" id="" placeholder="Título" ref={nameRef} />


          {isFavorite ?
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ToggleIsFavorite}>
              <path d="M7.47998 7.50375L2.32617 8.29666L6.88529 11.9638L5.69595 17.5141L9.85865 14.3425L15.0125 17.5141L13.6249 11.9638L17.4903 8.29666L12.2373 7.50375L9.85865 2.34995L7.47998 7.50375Z" fill="#FFA000" />
              <path d="M9.93799 13.7112L6.29971 15.9077L7.25766 11.7662L4.04514 8.97947L8.28335 8.62145L9.93799 4.71223L11.5926 8.62145L15.8308 8.97947L12.6183 11.7662L13.5763 15.9077M19.6143 7.76026L12.657 7.17001L9.93799 0.754639L7.21896 7.17001L0.261719 7.76026L5.53529 12.3371L3.95805 19.1396L9.93799 15.5303L15.9179 19.1396L14.331 12.3371L19.6143 7.76026Z" fill="#455A64" />
            </svg>
            :
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ToggleIsFavorite}>
              <path d="M9.93799 13.2503L6.29971 15.4469L7.25766 11.3054L4.04514 8.51865L8.28335 8.16063L9.93799 4.25142L11.5926 8.16063L15.8308 8.51865L12.6183 11.3054L13.5763 15.4469M19.6143 7.29944L12.657 6.70919L9.93799 0.293823L7.21896 6.70919L0.261719 7.29944L5.53529 11.8763L3.95805 18.6787L9.93799 15.0695L15.9179 18.6787L14.331 11.8763L19.6143 7.29944Z" fill="#455A64" />
            </svg>
          }

        </div>
        <div>
          <textarea name="" id="" placeholder="Criar nota..." ref={descriptionRef}></textarea>
        </div>
      </form>

      <Title title="Favoritos" />
      <main className={styles.main}>
        {task && task.map((value) => {
          return <Card key={value.id} color={value.color}>
            <CardHeader data={value} handleIsFavorite={() => handleisFavorito(value.id)} />
            <CardBody />
            <CardFooter onClick={() => toggleOpen(value.id)} handleDelete={() => handleDelete(value.id)} /> {/* Passa o ID do cartão */}
            {openCardId === value.id ?
              <CardColor key={value.id}>
                <CardColorItems color="#BAE2FF" onclick={() => handleCorlor(value.id, "#BAE2FF")} />
                <CardColorItems color="#B9FFDD" onclick={() => handleCorlor(value.id, "#B9FFDD")} />
                <CardColorItems color="#FFE8AC" onclick={() => handleCorlor(value.id, "#FFE8AC")} />
                <CardColorItems color="#FFCAB9" onclick={() => handleCorlor(value.id, "#FFCAB9")} />
                <CardColorItems color="#F99494" onclick={() => handleCorlor(value.id, "#F99494")} />
                <CardColorItems color="#9DD6FF" onclick={() => handleCorlor(value.id, "#9DD6FF")} />
                <CardColorItems color="#ECA1FF" onclick={() => handleCorlor(value.id, "#ECA1FF")} />
                <CardColorItems color="#DAFF8B" onclick={() => handleCorlor(value.id, "#DAFF8B")} />
                <CardColorItems color="#FFA285" onclick={() => handleCorlor(value.id, "#FFA285")} />
                <CardColorItems color="#CDCDCD" onclick={() => handleCorlor(value.id, "#CDCDCD")} />
                <CardColorItems color="#979797" onclick={() => handleCorlor(value.id, "#979797")} />
                <CardColorItems color="#A99A7C" onclick={() => handleCorlor(value.id, "#A99A7C")} />
              </CardColor> : null} {/* Renderiza condicionalmente */}
          </Card>
        })}
      </main>





    </div>
  );
};

export default TasksPage;
