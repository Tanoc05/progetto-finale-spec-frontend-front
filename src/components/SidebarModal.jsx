import { createPortal } from "react-dom"
import { GlobalContext } from "../context/GlobalContext"
import { createContext, useContext } from "react"
import NavbarFoodCard from "./NavbarFoodCard"
import { Heart } from "lucide-react"

function SidebarModal({onClose}) {

    const {favourites, addFav, removeFav} = useContext(GlobalContext)

    return createPortal(
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
            <div className="w-[80%] md:w-[50%] h-full bg-white shadow-xl flex flex-col justify-between">
                    <div className="">
                        <div className="flex items-center justify-between w-[90%] mx-auto pt-4 pb-4 border-b border-slate-200">
                           <h2 className="text-center text-2xl font-bold mb-3">I Tuoi Preferiti</h2>
                            <button onClick={onClose} className="border border-slate-200 px-4 py-2 rounded-full mr-2">x</button>
                        </div>

                        {favourites.length === 0 && (
                            <div className="flex flex-col justify-center items-center mt-[80%]">
                                <Heart size={40} color="#D3D3D3"/>
                                <p className="text-center mt-2">Ancora nessun preferito...</p>
                                <p className="mt-2 text-sm text-gray-400">Tocca il cuore su un piatto per</p>
                                <p className="text-sm text-gray-400">salvarlo qui e ritrovarlo ovunque.</p>
                            </div>
                        )}

                        <div className="mx-3 mt-5">
                            {favourites.map(f => <NavbarFoodCard key={f.id} props={f}/>)}
                        </div>
                    </div>
            </div>
        </div>,
        document.body
    )
}

export default SidebarModal