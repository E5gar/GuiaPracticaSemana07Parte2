import { memo } from 'react'
import TaskForm from './TaskForm'
import TaskFilters from './TaskFilters'
import TaskList from './TaskList'

const TaskPanel = ({ tasks, filter, sort, onAdd, onRemove, onToggle, onFilter, onSort }) => {
  const pending = tasks.filter((task) => !task.done).length

  return (
    <section
      id="pendientes"
      className="border-y border-line bg-soft px-6 py-24 md:px-9 md:py-[155px] dark:border-night-line dark:bg-night-soft"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-[620px]">
          <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal dark:text-paper-dim">
            <span className="h-px w-10 bg-warm" />
            05 / Pendientes
          </p>
          <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl">
            Gestor de tareas de la tienda
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-charcoal dark:text-paper-dim">
            {pending} pendientes de {tasks.length} registrados. Reposición, proveedores, eventos y
            atención al cliente en un solo lugar.
          </p>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-[70px]">
          <div className="self-start border border-line bg-white p-8 shadow-[0_18px_45px_rgba(20,20,20,0.035)] md:p-[42px] dark:border-night-line dark:bg-night">
            <TaskForm onAdd={onAdd} />
          </div>
          <div>
            <TaskFilters filter={filter} sort={sort} onFilter={onFilter} onSort={onSort} />
            <TaskList
              tasks={tasks}
              filter={filter}
              sort={sort}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(TaskPanel)