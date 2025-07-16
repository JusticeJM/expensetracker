import { useFormik } from "formik";
import * as Yup from "Yup";
import { useExpenseContext } from "../contexts/ExpenseContext";
import { MdClose } from "react-icons/md";

export default function ExpenseForm({hideExpenseForm}) {
    const {addExpense} = useExpenseContext();

    const formik = useFormik({
        initialValues: {expenseName:"", cost:"", addedOn:""},
        validationSchema: Yup.object({
            expenseName: Yup.string()
            .required('Required')
            .oneOf(['Food', 'Transport', 'Healthcare', 'Electricity', 'Rent', 'Water', 'Other'],'Invalid choice'),
            cost: Yup.number()
            .typeError('Cost must be a number')
            .required('Required')
            .positive('Cost must be positive')
            .max(10000000, 'Cost must be less than 10,000,000')
            .test(
                'is-decimal',
                'Cost should have maximum upto 2 decimal.places',
                (value) => {
                    return value === undefined || /^\d+(\.\d{1,2})?$/.test(value);
                }
            ),
            addedOn: Yup.date()
            .required('Required')
            .typeError('Must be a valid date')
            .test(
                'is-past-or-today',
                'Date must be today or earlier',
                (value) => {
                    if(!value) return false;
                    const inputDate = new Date(value);
                    const today = new Date();
                    inputDate.setHours(0, 0, 0, 0);
                    return inputDate <= today
                }
            )
        }),
        onSubmit: (values, {resetForm}) => {
            addExpense(values);
            resetForm();
        }
    })

    return(
        <form onSubmit={formik.handleSubmit} className="bg-gray-100/30 fixed top-0 right-0 left-0 z-50 w-full h-full">
            <div className="font-sans max-w-xs mx-auto bg-white my-18 border border-gray-100 rounded-lg pb-8 px-5 py-3 shadow-lg sm:max-w-sm">
                <div className="flex justify-between items-center mb-5">
                    <span className="text-xl font-semibold text-gray-800">Add new expense</span>
                    <button className="p-1 bg-gray-50 rounded-lg cursor-pointer hover:bg-violet-100"
                        onClick={hideExpenseForm}>
                        <MdClose className="size-4"/>
                    </button>
                </div>
                <div className="">
                    <div className="mb-4">
                        <label htmlFor="expenseName" className="block text-sm font-normal text-black/90 mb-1.5">
                            Expense
                        </label>
                        <select className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500"
                            id="expenseName"
                            {...formik.getFieldProps('expenseName')}
                        >
                            <option value="">Choose expense ...</option>
                            <option value="Food">Food</option>
                            <option value="Transport">Transport</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Rent">Rent</option>
                            <option value="Water">Water bill</option>
                            <option value="Other">Other</option>
                        </select>
                         {
                            formik.touched.expenseName && formik.errors.expenseName ? (
                               <div className="text-sm font-light text-red-600">{formik.errors.expenseName}</div> 
                            ):null
                        }
                    </div>
                    <div className="flex flex-col gap-y-2 mb-6">
                        <div className="w-full mb-2">
                            <label htmlFor="cost" className="block text-sm font-normal text-black/90 mb-1.5">
                                Cost
                            </label>
                            <input className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500" 
                                type="text"
                                id="cost"
                                {...formik.getFieldProps('cost')}
                            />
                            {
                                formik.touched.cost && formik.errors.cost ? (
                                    <div className="text-sm font-light text-red-600">{formik.errors.cost}</div> 
                                ):null
                            }
                        </div>
                        <div className="w-full">
                            <label htmlFor="addedOn" className="block text-sm font-normal text-black/90 mb-1.5">
                                Added On
                            </label>
                            <input className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500" 
                                type="date"
                                id="addedOn"
                                {...formik.getFieldProps('addedOn')} 
                            />
                            {
                                formik.touched.addedOn && formik.errors.addedOn ? (
                                    <div className="text-sm font-light text-red-600">{formik.errors.addedOn}</div> 
                                ):null
                            }
                        </div>
                    </div>
                </div>
                <button className="block w-full px-4 py-2 bg-sky-600 text-white text-sm text-medium rounded-lg cursor-pointer hover:bg-sky-500 "
                    type="submit"
                >
                    Add Expense
                </button>
            </div>
        </form>

    )
}