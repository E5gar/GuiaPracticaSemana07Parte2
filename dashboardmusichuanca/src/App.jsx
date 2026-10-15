import { useReducer, useContext } from 'react'
import tasksReducer from './hooks/useTasksReducer'
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext'
import TaskList from './components/TaskList'

const Dashboard = () => {
  const [state, dispatch] = useReducer(tasksReducer, { items: [], filter: 'all', sort: 'asc' })
  const { theme, toggleTheme } = useContext(ThemeContext)

  // TODO: Conectar dispatch a handlers, renderizar TaskList y controles
  return (
    <div className={`dashboard ${theme}`}>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <h1>Gestor de Tareas</h1>
      {/* TODO: Renderizar lista y formularios con dispatch */}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  )
}
