import { Link } from "react-router-dom"
import { navLinks } from "../data/links"

export default function Navbar(){
    return(
        <nav className="mt-2 pb-2">
            <ul className="flex items-center gap-3 flex-col md:flex-row">
                {
                    navLinks.map((navLink) => (
                        <li key={navLink.id} className=" text-black/95 ">
                            <Link to={navLink.to} className=" bg-gray-50 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-sky-600 hover:text-white focus:ring-2 focus:ring-sky-500">
                                {navLink.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}