import { countersTypes } from "./counters.action";

const INITIAL_STATE = {
  counters: [{ id: "1", name: "Valor padrão", counterValue: 123 }],
};

const editCounters = (state, action) => {
  const counter = action.payload;
  const { counters } = state;

  const newList = counters.reduce((prev, curr) => {
    if (curr.id === counter.id) {
      return [].concat(prev, counter);
    }
    return [].concat(prev, curr);
  }, []);

  return { ...state, counters: newList };
};

const countersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countersTypes.CREATE:
      return { ...state, counters: [...state.counters, action.payload] };

    case countersTypes.UPDATE:
      return editCounters(state, action);

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
};

export default countersReducer;
