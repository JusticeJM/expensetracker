import { BiArrowToTop } from "react-icons/bi";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function HeroCard(){
    return(
        <div className="w-full border border-gray-100 px-5 py-4 rounded-md flex flex-col gap-2 font-sans shadow-md">
            <div className="">
                <h4 className="text-xl font-medium text-black/90">Monthly Expenses</h4>
                <p className="text-sm font-normal text-black/70">Summary of Monthly Expenses</p>
            </div>
            <div className="flex justify-between items-center text-sky-950">
                <span className="text-2xl font-bold">$180.25</span>
                <HiMiniArrowTopRightOnSquare className="size-5"/>
            </div>
        </div>
    )
}