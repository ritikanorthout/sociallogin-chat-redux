import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

function saveToLocalStorage(state) {

  console.log('saveToLocalStorage ', state);

  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log(error);
  }
}

function loadToStore() {

  console.log('loadToStore');
  try {
    const serializedState = localStorage.getItem("state");
    console.log('serializedState',serializedState);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
  }
}
const per = loadToStore();
const store = createStore(Reducer, per, applyMiddleware(thunk));

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
