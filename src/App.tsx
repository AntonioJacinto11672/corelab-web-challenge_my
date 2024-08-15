import { Toaster } from "react-hot-toast"
import TasksPage from "./pages/Task"

function App() {


  return (
    <div>
      <Toaster toastOptions={{
        style: {
          backgroundColor: '#959595',
          color: '#fff'
        }
      }} />
      <TasksPage />
    </div>
  )
}

export default App
