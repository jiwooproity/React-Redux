import { createStore } from "redux";

const SwtichObject = [
  {
    ADD: "ADD",
    DELETE: "DEL",
  },
];

const addToDo = (text) => {
  return {
    type: SwtichObject.ADD,
    text,
  };
};

const delToDo = (id) => {
  return {
    type: SwtichObject.DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case SwtichObject.ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case SwtichObject.DELETE:
      return state.filter((toDo) => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe();

export default store;
