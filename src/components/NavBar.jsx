import { Scale, Sidebar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SidebarModal from "./SidebarModal";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function NavBar() {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {favourites} = useContext(GlobalContext);
    const {comparator} = useContext(GlobalContext);

    return (
        <div className="py-4 px-3 bg-red-50 flex justify-between">
            <p className="text-2xl font-bold"><Link to={'/'}>Gusta con noi</Link></p>
            <div className="flex gap-3 items-center">
                <Link to={'/compare'} className="relative border p-2 rounded-full border-slate-300">
                    <Scale size={22}/>
                    {comparator.length !== 0 && (
                        <div className="absolute top-0 left-7 bg-black text-white text-xs px-1.5 rounded-full">{comparator.length}</div>
                    )}
                </Link>
                <div onClick={() => setIsSidebarOpen(true)} className="flex items-center bg-black rounded-full px-3 py-2 gap-2">
                    <p className="font-light text-white">Preferiti</p>
                    <span className="text-white bg-red-400 px-2 rounded-full text-[15px]">{favourites.length}</span>
                </div>
                {isSidebarOpen && (
                    <SidebarModal
                        onClose = {() => setIsSidebarOpen(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default NavBar