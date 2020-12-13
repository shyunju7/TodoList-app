import { LOGIN_USER, LOGOUT_USER } from "../action/login";

export const login = (userId) => {
  return {
    type: LOGIN_USER,
    payload: {
      userId: userId,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
    payload: {
      isLogin: false,
    },
  };
};

const initState = {
  loginUser: null,
  isLogin: false,
};

export default function loginReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: true,
        loginUser: payload.userId,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLogin: false,
        loginUser: null,
      };
    default:
      return {
        ...state,
      };
  }
}
