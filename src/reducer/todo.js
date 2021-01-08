import {
  LOAD_TODO,
  DELETE_TODO,
  INSERT_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../action/todo";

export const todoInsert = (titleId, userId, id, registrationDate, text) => {
  return {
    type: INSERT_TODO,
    payload: {
      titleId: titleId,
      id: id,
      writer: userId,
      registrationDate: registrationDate,
      text: text,
      isCompleted: false,
      isShared: false,
    },
  };
};

export const todoToggle = (titleId, id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id: id, titleId: titleId },
  };
};

export const todoUpdate = (titleId, id, text) => {
  return {
    type: UPDATE_TODO,
    payload: { titleId: titleId, id: id, text: text },
  };
};

export const todoDelete = (titleId, id) => {
  return {
    type: DELETE_TODO,
    payload: { titleId: titleId, id: id },
  };
};

export const todoLoad = (titleId) => {
  return {
    type: LOAD_TODO,
    payload: {
      titleId: titleId,
    },
  };
};

const initState = {
  todos: [
    {
      titleId: "I05234",
      id: "dsfasf",
      writer: "admin",
      registrationDate: "2021/01/01",
      text: "TODOLIST INDIVIDUAL",
      isCompleted: false,
      isShared: false,
    },
    {
      titleId: "T05234",
      id: "asdas",
      writer: "admin",
      registrationDate: "2021/01/01",
      text: "TODOLIST TEAM",
      isCompleted: false,
      isShared: true,
    },
  ],
};

export default function todoReducer(state = initState, { type, payload }) {
  switch (type) {
    case INSERT_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          titleId: payload.titleId,
          id: payload.id,
          writer: payload.writer,
          registrationDate: payload.registrationDate,
          text: payload.text,
          isCompleted: false,
          isShared: false,
        }),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.titleId === payload.titleId && todo.id === payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.titleId === payload.titleId && todo.id === payload.id
            ? { ...todo, text: payload.text }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.titleId === payload.titleId && todo.id !== payload.id
        ),
      };
    case LOAD_TODO:
      return {
        ...state,
        myTodos: state.todos.filter((todo) =>
          todo.titleId === payload.titleId ? todo : null
        ),
      };
    default:
      return { ...state };
  }
}
