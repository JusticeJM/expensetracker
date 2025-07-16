import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { homeNavLinks } from "../data/homeLinks";
import ButtonLink from "./ButtonLink";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function HomeNav(){
    const [showMenu, setShowMenu] = useState(false);

    const displayMenu = () => {
        setShowMenu(true);
    }

    const hideMenu = () => {
        setShowMenu(false);
    }
    return(
        <div className="w-full px-6 py-3 font-sans border-b border-b-gray-200">
            <nav className="flex items-center justify-between">
                <Logo/>
                <div className="md:hidden">
                    <button className="p-1 flex items-center rounded-md hover:bg-gray-100" onClick={displayMenu}>
                        <IoMdMenu className="size-5" />
                    </button>
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full">
                        {
                          homeNavLinks.map((homeNavLink) => (
                            <li key={homeNavLink.id} >
                                <Link className="text-sm font-medium text-black/60 hover:text-black/90 focus:text-black" 
                                    to={homeNavLink.to}
                                >
                                    {homeNavLink.name}
                                </Link>
                            </li>

                          ))  
                        }
                    </ul>
                </div>
                <div className="hidden md:inline-flex md:space-x-3">
                    <ButtonLink linkFor="/login">Login</ButtonLink>
                    <ButtonLink linkFor="/signup" primaryLink >Register</ButtonLink>
                </div>
            </nav>
            {
                showMenu && <MobileNav hideMenu={hideMenu}/>
            }
        </div>
    )
}