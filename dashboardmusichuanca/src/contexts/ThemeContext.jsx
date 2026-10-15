import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // TODO: Inicializar estado con localStorage o valor por defecto
  const [theme, setTheme] = useState('light')

  // TODO: useEffect para aplicar clase al <body> y persistir en localStorage
  // TODO: Función toggleTheme expuesta via value

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
