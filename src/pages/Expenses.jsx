import { useState } from "react";
import { useExpenseContext } from "../contexts/ExpenseContext";
import ExpenseNotFound from "../components/ExpenseNotFound";
import Filter from "../components/Filter";
import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import EditForm from "../components/EditForm";

export default function Expenses(){
    const {expenses, editingExpense} = useExpenseContext();
    const [showForm, setShowForm] = useState(false);
    const [filterTab, setFilterTab] = useState("All");

    const displayExpenseForm = () => {
        setShowForm(true);
    }

    const hideExpenseForm = () => {
        setShowForm(false);
    }

    return(
        <div className="w-full h-screen">
            <Header/>
            <Filter displayExpenseForm={displayExpenseForm} setFilterTab={setFilterTab} />
            {
                expenses.length < 1 ? <ExpenseNotFound/> : <ExpenseList filterTab={filterTab}/>
            }
            {
                showForm && <ExpenseForm hideExpenseForm={hideExpenseForm} />
            }
            {
                editingExpense && <EditForm/>
            }       
        </div>
    )
}