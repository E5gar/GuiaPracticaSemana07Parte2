import { useContext } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ThemeContext } from '../contexts/ThemeContextObject'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors duration-[250ms] hover:border-ink dark:border-night-line dark:text-paper dark:hover:border-paper"
    >
      {isDark ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
    </button>
  )
}

export default ThemeToggle