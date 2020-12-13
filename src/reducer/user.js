import { DELETE_USER, MODIFY_USER, REGISTER_USER } from "../action/user";

export const registerUser = ({ userId, userPw }) => {
  return {
    type: REGISTER_USER,
    payload: { userId: userId, userPw: userPw },
  };
};

export const modifyPw = (userId, userPw) => {
  return {
    type: MODIFY_USER,
    payload: {
      userId: userId,
      userPw: userPw,
    },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: {
      userId: userId,
    },
  };
};

const initState = {
  users: [{ userId: "admin", userPw: "1111", teamId: "A" }],
};

export default function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        users: state.users.concat({
          userId: payload.userId,
          userPw: payload.userPw,
          teamId: payload.teamId,
        }),
      };
    case MODIFY_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === payload.userId
            ? { ...user, userPw: payload.userPw }
            : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.userId !== payload.userId),
      };

    default:
      return {
        ...state,
      };
  }
}
