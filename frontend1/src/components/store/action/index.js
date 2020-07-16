import { AUTH_LOGIN, USER_REGISTER } from "../../constant/type";

// export const fngetLogin = (data) => {
//   return (dispatch) => {
//     dispatch({
//       type: AUTH_LOGIN,
//       payload: data,
//     });
//   };
// };

// export const fnuserRegister = (userData) => {
//   return (dispatch) => {
//     dispatch({
//       type: USER_REGISTER,
//       payload: userData,
//     });
//   };
// };

export const getLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGIN,
      payload: data,
    });
  };
};

export const userRegister = (userData) => {
  return (dispatch) => {
    dispatch({
      type: USER_REGISTER,
      payload: userData,
    });
  };
};
