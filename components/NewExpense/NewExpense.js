import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    setFormOpenClosedState(true);
  };

  const [formIsInClosedState, setFormOpenClosedState] = useState(true);

  const formVisibilityHandler = () => {
    formIsInClosedState && setFormOpenClosedState(false);
    !formIsInClosedState && setFormOpenClosedState(true);
  };

  return (
    <div className="new-expense">
      {formIsInClosedState && (
        <button onClick={formVisibilityHandler}>Add New Expense</button>
      )}
      {!formIsInClosedState && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={formVisibilityHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
