import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All years");

  const filteredYearHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filteredExpenses =
    filteredYear === "All years"
      ? props.items
      : props.items.filter(
          (expense) => expense.date.getFullYear().toString() === filteredYear
        );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearValue={filteredYear}
          onFilteredYear={filteredYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
