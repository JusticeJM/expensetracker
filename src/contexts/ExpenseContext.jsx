import { useState, useContext, createContext } from "react";
import { nanoid } from "nanoid";

const ExpenseContext = createContext();

export const ExpenseProvider = ({children}) => {
    const [expenses, setExpenses] = useState([]);
    const [editingExpense, setEditingExpense] = useState(null);

    function addExpense(newExpenseData) {
        const newExpense = { id:nanoid(), ...newExpenseData};
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
    }

    function deleteExpense(id) {
        const remainingExpenses = expenses.filter((expense) => id !== expense.id);
        setExpenses(remainingExpenses);
    }

    function updateExpense(updatedExpense) {
        const editedExpenses = expenses.map((expense) => expense.id === updatedExpense.id ? updatedExpense : expense);
        setExpenses(editedExpenses);
        setEditingExpense(null);
    }

    function filterExpense(expenses, filterTab) {
        return expenses.filter((expense) => {
            if(filterTab === "All") {
                return true;
            } 
            else if(filterTab === "Food") {
                return expense.expenseName === "Food";
            } 
            else if(filterTab === "Transport" ) {
                return expense.expenseName === "Transport";
            } 
            else if(filterTab === "Healthcare") {
                return expense.expenseName === "Healthcare";
            } 
            else if(filterTab === "Electricity") {
                return expense.expenseName === "Electricity";
            } 
            else if(filterTab === "Rent") {
                return expense.expenseName === "Rent";
            } 
            else if(filterTab === "Water") {
                return expense.expenseName === "Water";
            } 
            else if(filterTab === "Other") {
                return expense.expenseName === "Other"
            }
        })
    }

    const startEditing = (expense) => {
        setEditingExpense(expense);
    }

    return(
        <ExpenseContext.Provider value={{expenses, addExpense, deleteExpense, updateExpense, startEditing, filterExpense, editingExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export const useExpenseContext = () => {
    const context = useContext(ExpenseContext);
    if(!context) {
        throw new Error('The context must be used within a provider')
    }
    return context ;
}
