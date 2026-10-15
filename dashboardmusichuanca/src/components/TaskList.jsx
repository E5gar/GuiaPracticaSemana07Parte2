import { memo, useMemo } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, filter, sort, onRemove, onToggle }) => {
  const processedTasks = useMemo(() => {
    const visible = tasks.filter((task) => {
      if (filter === 'pending') return !task.done
      if (filter === 'done') return task.done
      return true
    })
    const direction = sort === 'asc' ? 1 : -1
    return [...visible].sort((a, b) => direction * a.dueDate.localeCompare(b.dueDate))
  }, [tasks, filter, sort])

  if (processedTasks.length === 0) {
    return (
      <p className="border-b border-line py-10 text-[15px] text-charcoal dark:border-night-line dark:text-paper-dim">
        No hay pendientes con este filtro.
      </p>
    )
  }

  return (
    <ul>
      {processedTasks.map((task) => (
        <TaskItem key={task.id} task={task} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </ul>
  )
}

export default memo(TaskList)