import {
  CALL_TODO,
  DELETE_TODO,
  INSERT_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../action/todo";

export const todoInsert = (userId, id, text) => {
  return {
    type: INSERT_TODO,
    payload: {
      userId: userId,
      isShared: false,
      id: id,
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
    payload: { userId: userId },
  };
};

const initState = {
  todos: [
    {
      userId: "admin",
      isShared: false,
      id: 1,
      text: "TODOLIST 만들기",
      isCompleted: false,
    },
    {
      userId: "1",
      isShared: false,
      id: 2,
      text: "TODOLIST 테스트",
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
          userId: payload.userId,
          isShared: false,
          id: payload.id,
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
        todos: state.todos.filter((todo) => todo.userId === payload.userId),
      };
    default:
      return { ...state };
  }
}
