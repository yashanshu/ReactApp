import { createStore } from "redux";

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy,
});

function setCount({ setValue }) {
  return {
    type: "SET",
    setValue: setValue,
  };
}

function resetCount() {
  return {
    type: "RESET",
  };
}

// Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "SET":
      return { count: action.setValue };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount({ incrementBy: 24 }));
store.dispatch(decrementCount({ decrementBy: 24 }));
store.dispatch(resetCount());
store.dispatch(setCount({ setValue: 300 }));

unsubscribe();

const user = {
  name: Jen,
  age: 30
};

console.log({...user});