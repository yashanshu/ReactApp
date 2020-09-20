import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import visibleExpenses from "./selectors/expenses";
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

// addExpense water bill
store.dispatch(addExpense({ description: "water bill", amount: 1000 }));

// addExpense gas bill
store.dispatch(addExpense({ description: "gas bill", amount: 23000 }));

// addExpense gas bill
store.dispatch(addExpense({ description: "rent", amount: 23000 }));

// set text filter
store.dispatch(setTextFilter("water"));

// print filtered data
let state = store.getState();
console.log(visibleExpenses(state.expenses, state.filters));

store.dispatch(setTextFilter("bill"));

// print filtered data
state = store.getState();
console.log(visibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
