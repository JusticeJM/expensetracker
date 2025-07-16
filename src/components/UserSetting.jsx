import {BiChevronDown, BiUser } from "react-icons/bi";

export default function UserSetting({handleUserSettings}){

    return(
        <div className="max-w-xs shadow-md border border-gray-50 hover:border-gray-300 rounded-lg" role='button'
            onClick={handleUserSettings}
        >
            <div className="bg-gray-50/50 p-2 flex items-center gap-2">
                <div className="p-1 rounded-full bg-gray-200">
                    <BiUser className="size-4 text-sky-600"/>
                </div>
                <div className="inline-flex items-center space-x-2">
                    <BiChevronDown className="size-4"/>
                </div>
            </div>     
        </div>
    )
}