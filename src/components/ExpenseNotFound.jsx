import { BiPlus } from "react-icons/bi";
import search from "../assets/search.jpg";

export default function ExpenseNotFound(){
    return(
        <div className=" bg-white/80 my-4 p-4 max-w-sm mx-auto flex flex-col gap-y-4">
            <div className="flex items-center justify-center w-full h-64">
                <img loading="lazy" className="aspect-auto w-full h-60 object-center object-contain overflow-hidden" src={search}/>
            </div>
            <div className="my-1 mb-2 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-black/90 mb-1">
                    Couldn't find any expense!
                </h3>
                <span className="text-sm font-normal mb-5">
                    Start adding your expenses.
                </span>
            </div>
        </div>
    )
}