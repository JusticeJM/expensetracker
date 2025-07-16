import { MdClose } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useUserContext } from "../contexts/userContext";

export default function UserForm({hideForm}){
    const {addUser} = useUserContext();

    const formik = useFormik({
        initialValues: {fullName:"", hobby:""},
        validationSchema: Yup.object({
            fullName: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
            hobby: Yup.string().oneOf(['hiking', 'running', 'other'], 'Invalid hobby').required('Required')
        }),
        onSubmit: values => {
            addUser(values);
            console.log(values);
        },
    })
    return(
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-3 p-5 font-sans bg-gray-50 z-50 rounded-lg border-2 border-violet-200 pb-6">
            <div className="flex justify-between items-center border-b-2 border-b-gray-500 pb-3">
                <span className="text-xl font-medium text-black">Register your hobby</span>
                <MdClose onClick={hideForm} className="size-6 bg-gray-200 text-black rounded-md cursor-pointer hover:bg-gray-400"/>
            </div>
            <div className="my-4">
                <label htmlFor="fullName" className="block text-base font-semibold text-gray-900 mb-1">
                    Full Name:
                </label>
                <input className="block w-full text-sm p-2 border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500"
                    type="text" id="fullName" {...formik.getFieldProps('fullName')}
                />
                {
                    formik.touched.fullName && formik.errors.fullName ? (
                        <div className="text-sm font-normal text-red-500">{formik.errors.fullName}</div>
                    ): null
                }
            </div>
            <div className="mb-6">
                <label htmlFor="hobby" className="block text-base font-semibold text-gray-900 mb-1">
                    Hobby:
                </label>
                <select className="block w-full text-sm p-2 border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500" 
                    id="hobby" {...formik.getFieldProps('hobby')}
                >
                    <option value="">Select your hobby</option>
                    <option value="hiking">Hiking</option>
                    <option value="running">Running</option>
                    <option value="other">Other</option>
                </select>
                {
                    formik.touched.hobby && formik.errors.hobby ? (
                        <div className="text-sm font-normal text-red-500">{formik.errors.hobby}</div>
                    ): null
                }
            </div>
            <button type="submit" className="px-3 py-2 bg-violet-800 text-white text-base text-semibold block w-full rounded-lg cursor-pointer hover:bg-violet-600">
                Submit
            </button>
        </form>
    )
}