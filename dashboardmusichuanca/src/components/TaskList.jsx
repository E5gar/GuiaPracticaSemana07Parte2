import { useMemo, useCallback, useRef } from 'react'

const TaskList = ({ tasks, onRemove, onToggle }) => {
  const inputRef = useRef(null)

  // TODO: useMemo para filtrar/ordenar tareas sin recalcular en cada render
  const processedTasks = useMemo(() => {
    // ...
  }, [tasks])

  // TODO: useCallback para estabilizar handlers pasados a hijos
  const handleRemove = useCallback((id) => {
    onRemove(id)
  }, [onRemove])

  // TODO: useEffect para focus al input cuando se añade tarea
  // ...

  return (
    <ul>
      {processedTasks.map(task => (
        <li key={task.id}>
          <span>{task.title}</span>
          <button onClick={() => handleRemove(task.id)}>Eliminar</button>
        </li>
      ))}
      <input ref={inputRef} placeholder="Nueva tarea..." />
    </ul>
  )
}

export default TaskList
