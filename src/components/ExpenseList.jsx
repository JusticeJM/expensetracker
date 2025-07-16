import { useExpenseContext } from "../contexts/ExpenseContext";
import { useMemo, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import DeleteModal from "./DeleteModal";

export default function ExpenseList({filterTab}) {
    const {expenses, deleteExpense, filterExpense, startEditing} = useExpenseContext();
    const [showModal, setShowModal] = useState(false);
    const [expenseToDelete, setExpenseToDelete] = useState(null);
    
    const visibleExpenses = useMemo(
        () => filterExpense(expenses, filterTab)
        ,[expenses, filterTab]
    );

    const handleDelete = (expense) => {
        setExpenseToDelete(expense);
        setShowModal(true);
    }

    function confirmDelete() {
        if(expenseToDelete) {
            deleteExpense(expenseToDelete.id);
            setShowModal(false);
            setExpenseToDelete(null);
        }
    }

    function hideModal() {
        setShowModal(false);
        setExpenseToDelete(null);
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'TZS',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount)
    }

    return(
    <div className="w-full pt-4 px-6 mt-8 grid grid-cols-1 gap-y-3 gap-x-3 place-items-center sm:grid-cols-2 lg:grid-cols-4">
      {visibleExpenses.map((expense) => {
        return(
                <div key={expense.id} className="w-full px-4 py-2 rounded-md bg-slate-50/20 shadow-sm border border-gray-100 hover:border-gray-200">
                    <div className="">
                        <div className="flex items-center justify-between pb-3">
                            <h4 className="text-base font-medium text-gray-800">{expense.expenseName}</h4>
                            <span className="text-base font-bold text-gray-950">{formatCurrency(expense.cost)}</span>
                        </div>
                        <hr className="text-gray-200"/>
                        <div className="flex justify-between items-center gap-1 mt-2">
                            <div className="inline-flex items-center space-x-2">
                                <FaCalendar className="size-4 text-gray-600"/>
                                <span className="text-sm font-medium text-gray-600">{expense.addedOn}</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <button className="p-1.5 rounded-lg bg-gray-50/20 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => startEditing(expense)}
                                >
                                    <MdEdit className="size-4 text-gray-600"/>
                                </button>
                                <button className="p-1.5 rounded-lg bg-red-50/20 hover:bg-red-100 cursor-pointer"
                                    onClick={() => handleDelete(expense)}
                                >
                                    <MdDelete className="size-4 text-red-600"/>
                                </button>
                            </div>      
                        </div>
                    </div>
                </div>
            )}
        )}
        {
            showModal ? <DeleteModal hideModal={hideModal} confirmDelete={confirmDelete}/> : null
        }
        
    </div>
    )
}