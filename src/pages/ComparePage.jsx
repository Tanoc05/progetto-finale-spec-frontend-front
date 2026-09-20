import NavBar from "../components/NavBar"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Scale } from "lucide-react";
import ComparatorFoodCard from "../components/ComparatorFoodCard";

function ComparePage() {

    const {comparator,addFoodToCompare,removeFoodToCompare} = useContext(GlobalContext);


    return (
        <div>
            <NavBar/>
            <div className="mx-3 mb-120">
                <p className="text-center md:text-left text-[30px] font-medium mt-10">Due piatti,<span className="text-red-400">una scelta</span></p>
                <p className="text-center md:text-left w-[100%] md:w-[70%] mt-5 text-gray-500">seleziona due piatti qualsiasi e confrontali fianco a fianco: calorie,tempi , metodi di conservazione , proteine ,grassi ecc..</p>
                {comparator.length !== 2 ? (
                    <div>
                        <div className="w-full flex flex-col border-2 border-dashed border-gray-300 rounded-xl mt-15 items-center justify-center text-center py-10">
                            <Scale size={50} color="#D3D3D3"/>
                            <h2 className="text-gray-800 font-medium tracking-wide mt-3">Seleziona almeno 2 piatti per iniziare - piatti selezionati : {comparator.length}</h2>
                            <p className="text-gray-500 font-light mt-3 tracking-wide">Usa i pulsanti confronta nei dettagli di un cibo per confrontarli </p>
                        </div>

                        <div className="mt-5">
                            {comparator.length === 1 && (
                                <div>
                                    <p className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-500">Piatto selezionato</p>
                                    {comparator.map(c => {
                                        return (
                                            <div key={c.id} className="flex items-center gap-4 rounded-xl border border-red-200 bg-red-50 p-3 shadow-sm">
                                                <img className="h-24 w-24 shrink-0 rounded-lg object-cover object-top" src={c.imageUrl} alt={c.title} />
                                                <div className="min-w-0">
                                                    <p className="mb-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-red-400">{c.category}</p>
                                                    <p className="truncate text-lg font-medium text-slate-800">{c.title}</p>
                                                    <p className="mt-1 text-sm text-slate-500">Pronto per il confronto</p>
                                                </div>
                                                <div className="ml-auto flex shrink-0 flex-col items-end gap-2">
                                                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">1 / 2</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFoodToCompare(c.id)}
                                                        className="text-xs text-red-400 underline underline-offset-2 hover:text-red-600"
                                                    >
                                                        Rimuovi
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div> 
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-4">
                        {comparator.map(c => {
                            return <div className="" key={c.id}>
                                <ComparatorFoodCard props={c}/>
                            </div>
                        })}
                    </div>
                )}

            </div>
        </div>
    )
}

export default ComparePage