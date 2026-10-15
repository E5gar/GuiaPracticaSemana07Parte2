import { memo, useRef, useState } from 'react'
import { Plus } from 'lucide-react'

const categories = ['Reposición', 'Proveedores', 'Eventos', 'Marketing', 'Atención']

const emptyForm = { title: '', category: categories[0], dueDate: '' }

const fieldClass =
  'w-full border-b border-line bg-transparent py-3 text-[15px] outline-none transition-colors duration-[250ms] placeholder:text-ash focus:border-ink dark:border-night-line dark:placeholder:text-paper-dim dark:focus:border-paper'

const labelClass =
  'block text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal dark:text-paper-dim'

const TaskForm = ({ onAdd }) => {
  const [form, setForm] = useState(emptyForm)
  const inputRef = useRef(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = form.title.trim()
    if (!title || !form.dueDate) return
    onAdd({ ...form, title })
    setForm(emptyForm)
    inputRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div>
        <label htmlFor="task-title" className={labelClass}>
          Nuevo pendiente
        </label>
        <input
          id="task-title"
          ref={inputRef}
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="Ej. Pedir cajas de casetes"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="task-category" className={labelClass}>
          Categoría
        </label>
        <select
          id="task-category"
          name="category"
          value={form.category}
          onChange={handleChange}
          className={fieldClass}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="task-date" className={labelClass}>
          Fecha límite
        </label>
        <input
          id="task-date"
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={handleChange}
          required
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        className="group inline-flex h-[52px] items-center justify-center gap-3 border border-ink bg-ink px-6 text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-[250ms] hover:border-warm hover:bg-warm hover:text-ink dark:border-paper dark:bg-paper dark:text-night dark:hover:border-warm dark:hover:bg-warm"
      >
        Agregar pendiente
        <Plus
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-[250ms] group-hover:rotate-90"
        />
      </button>
    </form>
  )
}

export default memo(TaskForm)