import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// configure store
const store = configureStore();

// subscription here?
// store.subscribe(() => {
//   const state = store.getState();
//   const filteredExpenses = expenseSelector(state.expenses, state.filters);
//   console.log(filteredExpenses);
// });

// Test data
store.dispatch(addExpense({ description: "water bill", amount: 1000 }));
store.dispatch(
  addExpense({ description: "gas bill", amount: 23000, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "water bill", amount: 109500 }));

// print filtered data
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
