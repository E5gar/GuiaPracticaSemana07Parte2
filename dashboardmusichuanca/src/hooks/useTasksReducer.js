import { readStoredValue } from './useLocalStorage';

export const TASKS_STORAGE_KEY = 'musiccentro-tasks';

export const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  TOGGLE: 'TOGGLE',
  FILTER: 'FILTER',
  SORT: 'SORT',
};

export const initialState = { items: [], filter: 'all', sort: 'asc' };

export const createInitialState = (seed) => ({
  ...initialState,
  items: readStoredValue(TASKS_STORAGE_KEY, seed),
});

function tasksReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return { ...state, items: [...state.items, action.payload] };
    case ACTIONS.REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ACTIONS.TOGGLE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, done: !item.done } : item
        ),
      };
    case ACTIONS.FILTER:
      return { ...state, filter: action.payload };
    case ACTIONS.SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
}

export default tasksReducer;
