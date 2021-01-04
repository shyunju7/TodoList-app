import {
  CALL_TODO,
  DELETE_TODO,
  INSERT_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../action/todo";

export const todoInsert = (userId, id, registrationDate, text) => {

  return {
    type: INSERT_TODO,
    payload: {
      id: id,
      writer: userId,
      registrationDate: registrationDate,
      text: text,
      isCompleted: false,
    },
  };
};

export const todoToggle = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id: id },
  };
};

export const todoUpdate = (id, text) => {
  return {
    type: UPDATE_TODO,
    payload: { id: id, text: text },
  };
};

export const todoDelete = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id: id },
  };
};

export const todoCall = (userId) => {
  return {
    type: CALL_TODO,
    payload: { writer: userId },
  };
};

const initState = {
  todos: [
    {
      id: "I05234",
      writer: "admin",
      registrationDate: "2021/01/01",
      text: "TODOLIST INDIVIDUAL",
      isCompleted: false,
    },
    {
      id: "T05234",
      writer: "1",
      registrationDate: "2021/01/01",
      text: "TODOLIST TEAM",
      isCompleted: false,
    },
  ],
};

export default function todoReducer(state = initState, { type, payload }) {
  switch (type) {
    case INSERT_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          writer: payload.writer,
          registrationDate: payload.registrationDate,
          text: payload.text,
          isCompleted: false,
        }),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    case CALL_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.writer === payload.userId),
      };
    default:
      return { ...state };
  }
}
