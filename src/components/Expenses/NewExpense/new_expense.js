import './new_expense.css';
import ExpenseForm from './expense_form';

const NewExpense = ()=>{
   const newExpense = (enteredExpenseData)=>{
    const expenseData = {...enteredExpenseData,id:Math.random().toString()}
    console.log(expenseData);
   }


    return <div className='new-expense'>
       <ExpenseForm onSaveForm={newExpense}/>
    </div>
}

export default NewExpense;