import { Link } from "react-router-dom";

export default function ButtonLink({children, primaryLink, linkFor}){
    const baseStyles = "px-4 py-2 font-sans text-base font-medium rounded-lg text-center";
    const primaryStyles = "bg-violet-600 text-white hover:bg-violet-700 shadow-xs shadow-violet-600 ";
    const secondaryStyles = "border border-gray-300 text-gray-900 hover:bg-gray-100 ";

    return(
        <Link className={`${baseStyles} ${primaryLink ? primaryStyles : secondaryStyles}`} to={linkFor}>
            {children}
        </Link>

    )
}