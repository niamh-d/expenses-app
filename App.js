import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Lunch",
    amount: 7.65,
    date: new Date(2022, 8, 6),
  },
  {
    id: "e2",
    title: "Groceries",
    amount: 26.35,
    date: new Date(2022, 6, 5),
  },
  {
    id: "e3",
    title: "Netflix",
    amount: 9.99,
    date: new Date(2022, 5, 3),
  },
  {
    id: "e4",
    title: "Books",
    amount: 27.78,
    date: new Date(2022, 5, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
