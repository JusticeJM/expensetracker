import { Link } from "react-router-dom";
import { homeNavLinks } from "../data/homeLinks";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import ButtonLink from "./ButtonLink";

export default function MobileNav({hideMenu}){
    return(
        <div className="fixed left-0 right-0 top-0 z-40 w-full h-screen bg-gray-50 font-sans md:hidden">
            <nav className="flex flex-col gap-y-2">
                <div className="flex items-center justify-between border-b border-b-gray-200 px-8 py-3">
                    <Logo/>
                    <div>
                        <button className="p-1 flex items-center rounded-md hover:bg-gray-100" onClick={hideMenu}>
                            <IoMdClose className="size-5"/>
                        </button>
                    </div>
                </div>
                <div className="px-8 ">
                    <ul className="flex flex-col gap-y-1.5">
                        {
                            homeNavLinks.map((navLink) => (
                                <li key={navLink.id} className="px-3 py-1.5  border-l-2 border-l-gray-50 hover:border-l-sky-500 hover:bg-gray-100">
                                    <Link to={navLink.to} className="text-base font-medium text-black/60 hover:text-black/90">
                                        {navLink.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-y-3 mt-4 px-8">
                    <ButtonLink>Login</ButtonLink>
                    <ButtonLink primaryLink>Register</ButtonLink>
                </div>
            </nav>
        </div>
    )
}