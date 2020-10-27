export const initialState = {
  todos: [
    {
      id: 1,
      textValue: "시작하기!",
      checked: false,
    },
  ],
};

const dummyPost = (data) => {
  return {
    id: 2,
    textValue: `${data}`,
    checked: false,
  };
};

const ADD_POST = "ADD_POST";
const CHECKED_POST = "CHECKED_POST"; //보류

export const addPost = (data) => {
  return {
    type: ADD_POST,
    data: data,
  };
};

export const checkedPost = (id) => {
  return {
    type: CHECKED_POST,
    id,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log(action.data);
      return {
        ...state,
        todos: [dummyPost(action.data), ...state.todos],
      };
    default:
      return state;
  }
};

export default reducer;
