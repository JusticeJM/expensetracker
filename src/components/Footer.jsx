import { BiCopyright } from "react-icons/bi";
import Logo from "./Logo";

export default function Footer(){
    
    return(
        <footer className="bg-black py-4 text-white ">
            <div className="flex items-center justify-between px-6">
                <div className="inline-flex items-center space-x-1">
                    <BiCopyright className="size-4"/>
                    <span className="text-sm font-normal text-white/80">2025, All Rights Reserved</span>
                </div>
                <Logo isFooter/>
            </div>
        </footer>
    )
}