import { memo } from 'react'
import { Check, Trash2 } from 'lucide-react'

const formatDate = (value) =>
  new Date(`${value}T00:00:00`).toLocaleDateString('es-PE', { day: '2-digit', month: 'short' })

const TaskItem = ({ task, onRemove, onToggle }) => (
  <li className="flex items-center gap-4 border-b border-line py-5 dark:border-night-line">
    <button
      type="button"
      role="checkbox"
      aria-checked={task.done}
      aria-label={`Marcar como completada: ${task.title}`}
      onClick={() => onToggle(task.id)}
      className={`flex h-6 w-6 shrink-0 items-center justify-center border transition-colors duration-[250ms] ${
        task.done
          ? 'border-ink bg-ink text-white dark:border-paper dark:bg-paper dark:text-night'
          : 'border-charcoal hover:border-warm dark:border-paper-dim'
      }`}
    >
      {task.done && <Check size={14} strokeWidth={2} />}
    </button>
    <div className="min-w-0 flex-1">
      <p
        className={`text-[15px] leading-[1.5] ${
          task.done ? 'text-charcoal line-through decoration-warm dark:text-paper-dim' : ''
        }`}
      >
        {task.title}
      </p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim">
        {task.category} / {formatDate(task.dueDate)}
      </p>
    </div>
    <button
      type="button"
      aria-label={`Eliminar: ${task.title}`}
      onClick={() => onRemove(task.id)}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-transparent text-charcoal transition-colors duration-[250ms] hover:border-line hover:text-ink dark:text-paper-dim dark:hover:border-night-line dark:hover:text-paper"
    >
      <Trash2 size={16} strokeWidth={1.5} />
    </button>
  </li>
)

export default memo(TaskItem)