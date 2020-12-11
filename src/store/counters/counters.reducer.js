import { countersTypes } from "./counters.action";

const INITIAL_STATE = {
  counters: [{ id: "1", name: "Valor padrão", counterValue: 123 }],
};

export default function todos(state = INITIAL_STATE, action) {
  console.log("abc", state);
  switch (action.type) {
    case countersTypes.CREATE:
      return { ...state, counters: [...state.counters, action.payload] };
    case countersTypes.DELETE:
    return {
        ...state,
        counters: state.counters.filter((count) => {
          return count.id != action.payload;
        }),
      };
    default:
      return state;
  }
}
