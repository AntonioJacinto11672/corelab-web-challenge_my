import { useCallback, useEffect, useState } from "react";
import { Card, Search } from "../../components";
import styles from "./Tasks.module.scss";
import { TaskProps } from "../../types/Task";
import { FormEvent } from "react";
import "../../components/FormAddNote/formAddNote.scss"
import { api } from "../../service/api.service";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardColor from "../../components/Card/CardColor";
import CardColorItems from "../../components/Card/CardColorItems";
import { colors } from "../../util/colors";
import toast, { Toaster } from 'react-hot-toast';




const TasksPage = () => {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const [idOnUpdate, setidOnUpdate] = useState<string | null>(null)
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [onUpdate, setOnUpdate] = useState<boolean>()
  const [onUpdateData, setOnUpdateData] = useState<TaskProps>()


  useEffect(() => {
    handleSearch();
  }, [search]);

  async function loadTask() {
    /* Carregar todas as tarefas */
    const response = await api.get("/task")
    setTask(response.data)
    console.log(response)
  }


  const handleSubmit = async (event: FormEvent) => {
    /* Cadastrar Tarefas */
    event.preventDefault()
    if (!title || !description) return

    let response = null
    if (onUpdate) {

      response = await api.put("/task", {
        id: idOnUpdate,
        title: title,
        description: description,
        isFavorite: isFavorite
      })

      toast.success("Tarefa Editada com sucesso!")


      setOnUpdate(false);
      setIsFavorite(false);
      setidOnUpdate(null)
      setTitle("");
      setDescription("");
      setOnUpdate(true);
    } else {
      response = await api.post("/task", {
        title: title,
        description: description,
        isFavorite: isFavorite,
      })

      toast.success("Cadastrado com sucesso!")
    }

    /*  setTask(prev => [...prev, response.data]) */

    

    loadTask()
    setTitle('')
    setDescription('')
  }

  async function handleDelete(id: string) {
    /* Remover Tarefa */
    try {
      await api.delete("/task", {
        params: {
          id: id
        }
      })

      


      const allTask = task.filter((task) => task.id !== id)
      setTask(allTask)

      toast.remove("Tarefa removida com succeso!")
    } catch (error) {
      console.log("Erro ",error)
    }
  }


  async function handleisFavorito(id: string) {
    /* Adicionar tarefas aos Favoritos */
    try {

 

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
    /* Abrir o o catão com as cores */
    setOpenCardId((prevId) => (prevId === cardId ? null : cardId)); // Muda o ID do cartão aberto ou fecha se for o mesmo
  }, []);

  const ToggleIsFavorite = useCallback(() => {
    /* Activar favorito ao Cadastrar */
    setIsFavorite((prev) => !prev)
  }, [])



  async function handleCorlor(id: string, color: string) {
    try {

     

      const response = await api.put("/task/color", {
        id: id,
        color: color,
      })

      //console.log("Responsta", response)

      loadTask()
      setOpenCardId(null)

      if (response.data) {

      }

    } catch (error) {
      console.log(error)

    }
  }

  const handleSearch = useCallback(() => {
    try {
      /* Pesquisar Valores */
      if (search.trim() === "") {
        loadTask(); // Se o campo de pesquisa estiver vazio, carrega todas as tarefas
      } else {
        const filteredTasks = task.filter(value =>
          value.title.toLowerCase().includes(search.toLowerCase()) ||
          value.description.toLowerCase().includes(search.toLowerCase())
        );
        setTask(filteredTasks);
      }
    } catch (error) {
      console.log("Não está a pesquisar", error)
    }
  }, [search, task]);

  const handleUpdate = useCallback((data: TaskProps) => {
    setOnUpdate(false);
    setOnUpdateData(data);
    setIsFavorite(data.isFavorite);
    setidOnUpdate(data.id)
    setTitle(data.title);
    setDescription(data.description);
    setOnUpdate(true);
  }, [])
  return (
    <div className={styles.Tasks}>


      <header className={styles.header}>
        {/* Cabecalho Inicio */}
        <nav>
          <div className={styles.menu}>
            <div className={styles.logo}>
              <img src="/img/logo.svg" alt="Logotipo" />
            </div>

            <div className={styles.title}>CoreNotes</div>

            <div className={styles.search}>
              <Search placeholder="Pesquisar notas" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
            </div>
          </div>

        </nav>

        <img src="/img/remove.svg" alt="Remover" className={styles.remove} />
        {/* Cabeçalho Fim */}
      </header>



      {!onUpdate ?
        <form action="" method="post" onSubmit={handleSubmit}>
          {/* Formulário Para Criar Tarefas */}
          <div>
            <input type="text" name="" id="" placeholder="Título" value={title}
              onChange={(e) => setTitle(e.target.value)} />
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
            <textarea name="" id="" placeholder="Criar nota..." value={description}
              onChange={(e) => setDescription(e.target.value)} ></textarea>
          </div>
          {/*FIm Formulário Para Criar Tarefas */}
        </form> :

        <form action="" method="post" onSubmit={handleSubmit}>
          {/* Formulário Para Criar Tarefas */}
          <div>
            <input
              type="hidden"
              name="id"
              value={onUpdateData?.id || ""}
            />
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />


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
            <textarea
              placeholder="Criar nota..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/*FIm Formulário Para Criar Tarefas */}
        </form>
      }

      <main className={styles.main}>
        <p style={{ flex: 'none' }}>Favorito</p>
        {task && task.map((value) => {

          if (value.isFavorite) {
            return <>
              <Card key={value.id} color={value.color}>
                <CardHeader data={value} handleIsFavorite={() => handleisFavorito(value.id)} />
                <CardBody data={value} />
                <CardFooter onClick={() => toggleOpen(value.id)} handleDelete={() => handleDelete(value.id)} handleUpdate={() => handleUpdate(value)} /> {/* Passa o ID do cartão */}
                {openCardId === value.id ?
                  <CardColor key={value.id}>
                    {colors.map((color) => <CardColorItems key={value.id} color={color} onclick={() => handleCorlor(value.id, color)} />)}
                  </CardColor> : null} {/* Renderiza condicionalmente */}
              </Card>
            </>
          }

        })}
      </main>

      <main className={styles.main}>
        <p style={{ flex: 'none' }}>Outros</p>
        {task && task.map((value) => {

          if (!value.isFavorite) {
            return <>
              <Card key={value.id} color={value.color}>
                <CardHeader data={value} handleIsFavorite={() => handleisFavorito(value.id)} />
                <CardBody data={value} />
                <CardFooter onClick={() => toggleOpen(value.id)} handleDelete={() => handleDelete(value.id)} handleUpdate={() => handleUpdate(value)} /> {/* Passa o ID do cartão */}
                {openCardId === value.id ?
                  <CardColor key={value.id}>
                    {colors.map((color) => <CardColorItems key={value.id} color={color} onclick={() => handleCorlor(value.id, color)} />)}
                  </CardColor> : null} {/* Renderiza  AS Cores que não são favoritas */}
              </Card>
            </>
          }

        })}
      </main>





    </div>
  );
};

export default TasksPage;
