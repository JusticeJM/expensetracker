import { MdAnalytics, MdClose, MdSpaceDashboard } from "react-icons/md";
import {BiSolidReport} from "react-icons/bi"
import Separator from "./Separator";
import { navLinks } from "../data/links";
import { Link } from "react-router-dom";

const linkIcon = (name) => {
    if(name === "Expenses") {
        return <MdSpaceDashboard className="size-5 text-gray-800"/>
    } else if(name === "Reports") {
        return <BiSolidReport className="size-5 text-gray-800"/>
    } else if(name === "Analytics") {
        return <MdAnalytics className="size-5 text-gray-800"/> 
    } else {
        return <MdSpaceDashboard className="size-5 text-gray-800"/>
    }

}

export default function SideMenu({hideMobileMenu}){
    return(
        <div className="fixed top-0 right-0 left-0 bg-gray-50/30 w-full h-screen md:hidden">
            <div className="max-w-xs h-screen bg-white shadow-md">
                <div className="flex justify-end items-center py-2 px-3">
                    <div className=" p-1 bg-gray-100/10 rounded-lg hover:bg-gray-100/70" role="button" onClick={hideMobileMenu}>
                        <MdClose className="size-5 text-gray-800"/>
                    </div>   
                </div>
                <Separator/>
                <div className="pl-2 py-3 flex flex-col">
                    {
                        navLinks.map((navLink) => (
                            <Link key={navLink.id} to={navLink.to} className="pl-3 inline-flex items-center space-x-2 hover:bg-gray-100 py-2 rounded-md w-[90%]">
                                {linkIcon(navLink.name)}
                                <span className="text-base font-medium text-gray-800">
                                    {navLink.name}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}