import {
  DELETE_TODOTITLE,
  INSERT_TODOTITLE,
  UPDATE_TODOTITLE,
} from "../action/todoTitle";

export const todoTitleInsert = (id, userId, todoTitle, isShared) => {

  console.log(userId);
  return {
    type: INSERT_TODOTITLE,
    payload: {
      id: id,
      writer: userId,
      todoTitle: todoTitle,
      inShared: isShared,
    },
  };
};

export const todoTitleUpdate = (id, todoTitle) => {
  return {
    type: UPDATE_TODOTITLE,
    payload: {
      id: id,
      todoTitle: todoTitle,
    },
  };
};

export const todoTitleDelete = (id) => {
  return {
    type: DELETE_TODOTITLE,
    payload: { id: id },
  };
};

const initState = {
  todoTitles: [
    {
      id: "I05234",
      writer: "admin",
      todoTitle: "개인 투두리스트",
      isShared: false,
    },
    {
      id: "T05234",
      writer: "admin",
      todoTitle: "동아리 투두리스트",
      isShared: true,
    },
  ],
};

export default function todoTitleReducer(state = initState, { type, payload }) {
  switch (type) {
    case INSERT_TODOTITLE:
      return {
        ...state,
        todoTitles: state.todoTitles.concat({
          id: payload.id,
          writer: payload.writer,
          todoTitle: payload.todoTitle,
          isShared: payload.isShared,
        }),
      };
    case UPDATE_TODOTITLE:
      return {
        ...state,
        todoTitles: state.todoTitles.map((todoTitle) =>
          todoTitle.id === payload.id
            ? { ...todoTitle, text: payload.todoTitle }
            : todoTitle
        ),
      };
    case DELETE_TODOTITLE:
      return {
        ...state,
        todoTitles: state.todoTitles.filter(
          (todoTitle) => todoTitle.id !== payload.id
        ),
      };
    default:
      return { ...state };
  }
}
