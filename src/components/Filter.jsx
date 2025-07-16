import { BiPlus } from "react-icons/bi";
import { MdFilterList } from "react-icons/md";
import { filterList } from "../data/filterList";

export default function Filter({displayExpenseForm, setFilterTab}){
    
    return(
        <div className="w-full font-sans px-6 py-3 overflow-x-auto scroll-smooth mt-2 ">
            <div className="flex items-center gap-2">
                <div className="pr-3 border-r border-gray-300">
                    <button className="inline-flex items-center space-x-2 rounded-md cursor-pointer px-4 py-2 text-white bg-black/90 hover:bg-black/80 focus:ring-2 focus:ring-gray-400"
                        onClick={displayExpenseForm}
                    >
                        <span className="whitespace-nowrap text-sm font-medium ">Add Expense</span>
                        <BiPlus className="size-4"/>
                    </button>      
                </div>
                <div className="inline-flex items-center space-x-3 text-gray-800">
                    <MdFilterList className="size-4"/>
                    <span className="text-sm font-medium">Filters</span>
                </div>
                <div className="flex gap-3 items-center ml-2">
                    {
                        filterList.map((filter) => (
                            <button className="px-4 py-1.5 rounded-lg bg-gray-100 whitespace-nowrap text-sm font-normal hover:bg-gray-200"
                                key={filter.id}
                                onClick={() => setFilterTab(filter.text)}
                            >
                                {filter.text}
                            </button>
                        ))
                    }
                </div>
            </div>      
        </div>
    )
}