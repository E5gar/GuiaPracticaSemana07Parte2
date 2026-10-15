import { ArrowUpDown } from 'lucide-react'

const filters = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'done', label: 'Completadas' },
]

const TaskFilters = ({ filter, sort, onFilter, onSort }) => (
  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5 dark:border-night-line">
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {filters.map((item) => (
        <button
          key={item.value}
          type="button"
          aria-pressed={filter === item.value}
          onClick={() => onFilter(item.value)}
          className={`border-b pb-1 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-[250ms] ${
            filter === item.value
              ? 'border-ink text-ink dark:border-paper dark:text-paper'
              : 'border-transparent text-charcoal hover:border-warm dark:text-paper-dim'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
    <button
      type="button"
      onClick={() => onSort(sort === 'asc' ? 'desc' : 'asc')}
      className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal transition-colors duration-[250ms] hover:text-ink dark:text-paper-dim dark:hover:text-paper"
    >
      <ArrowUpDown size={14} strokeWidth={1.5} />
      {sort === 'asc' ? 'Ordenar por fecha más lejana' : 'Ordenar por fecha más cercana'}
    </button>
  </div>
)

export default TaskFilters