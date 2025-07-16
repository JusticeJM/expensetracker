import { BiUser } from "react-icons/bi";

export default function HeroHeader(){
    return(
        <div className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-2">
            <div>
                <h1 className="text-black text-xl font-semibold">
                    Expenso
                </h1>
            </div>
            <div className="p-2 bg-gray-300 rounded-full">
                <BiUser className="size-5 text-sky-800"/>
            </div>
        </div>
    )
}