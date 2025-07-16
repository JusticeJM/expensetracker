import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'Yup';
import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";

async function mockSignupAPI(username, password) {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            success:true,
            user:{username, password, name: username}
        })
    }, 1000)
});
}

export default function Signup() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {loginUser} = useUserContext();

    const handleRegisterUser = async (values) => {
        setError("");
        try{
            const response = await mockSignupAPI(values.username, values.password);
            if(response.success){
                loginUser(response.user);
                navigate('/expenses');
            } else{
                setError(response.message || "Signup failed");
            }
        }
        catch(err){
            setError('An error occured during signup');
        }
    }

    const formik = useFormik({
        initialValues: {username:"", password:""},
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required").matches(/^[a-zA-Z\s]*$/,'Numbers are not allowed'),
            password: Yup.string().min(4,'Password must be at-least 4 characters long')
            .matches(/[a-z]/,'Password must contain atleast one lowercase letter')
            .matches(/[A-Z]/,'Password must contain atleast one uppercase letter')
            .matches(/[!@#$%^&*(),.?:;{}<>|]/,'Password must contain atleast one special symbol')
            .required("Password is required")
        }),
        onSubmit: (values,{resetForm}) => {
            handleRegisterUser(values);
            resetForm();
        }
    })

    return(
      <div className="w-full h-screen pt-16 md:pt-28">  
        <div className="max-w-sm mx-auto px-5 py-7 border border-gray-100 font-sans bg-gray-50/20 rounded-md shadow-md shadow-slate-200">
            <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-black/95 mb-2">
                    Welcome to <span className=" text-violet-700 font-semibold">Expenso</span>
                </h4>
                <p className="text-sm font-medium text-black/65">Enter your details to register.</p>
            </div>
            <div className="my-2">
                {
                    error && <div className="text-sm text-red-500 font-normal">{error}</div>
                }
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-y-1 mb-3">
                    <label htmlFor="username" className="text-sm font-medium text-black/65">Username</label>
                    <input className="text-sm p-1.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                        type="text" 
                        id="username"
                        {...formik.getFieldProps('username')}
                    />
                    {
                        formik.touched.username && formik.errors.username ? (
                            <div className="text-sm font-light text-red-600">{formik.errors.username}</div> 
                        ):null
                    }
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="password" className="text-sm font-medium text-black/65">Password</label>
                    <input className="text-sm p-1.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 "
                        type="password" 
                        id="password"
                        {...formik.getFieldProps('password')}
                    />
                    {
                        formik.touched.password && formik.errors.password ? (
                            <div className="text-sm font-light text-red-600">{formik.errors.password}</div> 
                        ):null
                    }
                </div>
                <button type="submit" className="block w-full py-1.5 px-4 text-sm font-medium bg-violet-600 text-white rounded-md mt-5 cursor-pointer hover:bg-violet-700">
                    Signup
                </button>
            </form>
            <div className="text-sm font-medium text-black/75 text-center mt-4">
                <span>Already have an account?
                    <Link to="/login" className="text-violet-600 ml-1 underline underline-offset-3">Login</Link>
                </span>
            </div>
        </div>
      </div>
    )

}