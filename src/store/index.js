import { createStore } from "redux";
import { combineReducers } from "redux";
import counters from "./counters/counters.reducer";

const reducers = combineReducers({
  counters,
});


const store = createStore(reducers);

export { store };
