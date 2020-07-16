import { AUTH_LOGIN, USER_REGISTER, LOGOUT } from "../../constant/type";
const initialState = {
  isLoggedin: false,
  userInfo: { name: "", email: "", mobile: "", token: "", imgUrl: "" },
  userList: [],
};

const Reducer = (state = initialState, action) => {
  console.log("action.payload : ",action.payload);

  console.log("state : ",state);

  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isLoggedin: true,
        userInfo: {
          name: action.payload.name,
          email: action.payload.email,
          imgUrl: action.payload.imageUrl,
        },
      };
    case USER_REGISTER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case LOGOUT:
      return {
        ...state,
        userInfo: { name: "", email: "", mobile: "", token: "", imgUrl: "" },
        isLoggedin: false,
      };
    default:
      return {
        ...state,
      };
  }

};

export default Reducer;
