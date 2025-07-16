import { GrSearch } from "react-icons/gr";

export default function Search(){
    return(
        <form action="" className="w-full border border-gray-200 rounded-full py-1.5 px-3 flex gap-2 items-center justify-between shadow-sm">
            <div className="w-[90%] rounded-md">
                <input className="pl-2.5 py-1 text-sm font-normal w-full outline-none" 
                    type="text" 
                    placeholder="Search expense..." 
                />
            </div>   
            <button type="submit" className="hover:bg-gray-200 w-8 px-1 py-2 flex items-center justify-center rounded-full text-black/60 cursor-pointer">
                <GrSearch className="size-4"/>
            </button>
        </form>
    )
}