import "./expense_form.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredData, setEnteredData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredData({...enteredData,title:event.target.value});
    setEnteredData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveForm(enteredData);
    setEnteredData((prevState) => {
      return { ...prevState, amount: "" };
    });
    setEnteredData((prevState) => {
      return { ...prevState, date: "" };
    });
    setEnteredData((prevState) => {
      return { ...prevState, title: "" };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={enteredData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredData.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2030-12-31"
            value={enteredData.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
