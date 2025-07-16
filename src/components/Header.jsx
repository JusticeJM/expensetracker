import { useState } from "react";
import Logo from "./Logo";
import UserSetting from "./UserSetting";
import Navbar from "./Navbar";
import Separator from "./Separator";
import SideMenu from "./SideMenu";
import SettingModal from "./SettingModal";
import { useUserContext } from "../contexts/UserContext";
import { ImProfile } from "react-icons/im";
import { BiLock, BiLogOut } from "react-icons/bi";
import { MdMenu } from "react-icons/md";


export default function Header(){
    const [isClicked, setIsClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const {logoutUser} = useUserContext();

    function handleUserSettings(){
        setIsClicked(!isClicked);
    }

    const hideMobileMenu = () => {
        setIsMobile(false);
    }

    return(
      <div className="w-full">
        <div className="w-full flex items-center justify-between px-6 py-2">
            <div className="inline-flex space-x-8 items-center">
                <div className="inline-flex items-center space-x-3">
                    <div className="flex md:hidden" role="button" onClick={() => setIsMobile(true)}>
                        <MdMenu className="size-5"/>
                    </div>
                    <Logo/>
                </div>
                <div className="hidden md:flex">
                    <Navbar/>
                </div>
            </div>
            <div>
                <UserSetting handleUserSettings= {handleUserSettings}/>
                {
                    isClicked && (
                        <div className="fixed my-2 z-30 right-4 px-3 py-2 bg-gray-100 w-[200px] rounded-md shadow-md">
                            <SettingModal name='Profile'>
                                <ImProfile className="size-4"/>
                            </SettingModal>
                            <SettingModal name='Change Password'>
                                <BiLock className="size-4"/>
                            </SettingModal>
                            <button className="inline-flex space-x-3 items-center w-full px-2 py-1 cursor-pointer whitespace-nowrap hover:bg-sky-600 hover:text-white "
                                onClick={logoutUser}
                            >
                                <BiLogOut className="size-4"/>
                                <span className="text-sm font-normal">Logout</span>
                            </button>
                        </div>
                    )
                }  
            </div>                  
        </div>
        <Separator/>
        {
            isMobile && <SideMenu  hideMobileMenu={hideMobileMenu}/>
        }
      </div>
    )
}