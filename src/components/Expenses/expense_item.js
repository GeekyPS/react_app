import { useState } from "react";

import "./expense_item.css";
import ExpenseDate from "./expense_date";
import Card from "../UI/card";

function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date}></ExpenseDate>

        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
