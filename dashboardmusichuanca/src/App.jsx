import { useReducer, useContext, useEffect, useCallback } from 'react';
import tasksReducer, {
  ACTIONS,
  TASKS_STORAGE_KEY,
  createInitialState,
} from './hooks/useTasksReducer';
import { writeStoredValue } from './hooks/useLocalStorage';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeContext } from './contexts/ThemeContextObject';
import seedTasks from './data/tasks';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import CatalogSection from './components/CatalogSection';
import GenreSection from './components/GenreSection';
import AgendaSection from './components/AgendaSection';
import TaskPanel from './components/TaskPanel';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

const Dashboard = () => {
  const [state, dispatch] = useReducer(tasksReducer, seedTasks, createInitialState);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      writeStoredValue(TASKS_STORAGE_KEY, state.items);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [state.items]);

  const handleAdd = useCallback((task) => {
    dispatch({
      type: ACTIONS.ADD,
      payload: { ...task, id: crypto.randomUUID(), done: false },
    });
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch({ type: ACTIONS.REMOVE, payload: id });
  }, []);

  const handleToggle = useCallback((id) => {
    dispatch({ type: ACTIONS.TOGGLE, payload: id });
  }, []);

  const handleFilter = useCallback((filter) => {
    dispatch({ type: ACTIONS.FILTER, payload: filter });
  }, []);

  const handleSort = useCallback((sort) => {
    dispatch({ type: ACTIONS.SORT, payload: sort });
  }, []);

  return (
    <div
      className={`dashboard ${theme} min-h-screen bg-white text-ink dark:bg-night dark:text-paper`}
    >
      <Header />
      <main>
        <Hero />
        <StatsGrid />
        <CatalogSection />
        <GenreSection />
        <AgendaSection />
        <TaskPanel
          tasks={state.items}
          filter={state.filter}
          sort={state.sort}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onToggle={handleToggle}
          onFilter={handleFilter}
          onSort={handleSort}
        />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}
