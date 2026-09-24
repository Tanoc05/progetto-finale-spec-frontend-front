import { useContext, useEffect,useState,useMemo } from "react"
import { GlobalContext } from "../context/GlobalContext";
import NavBar from "../components/NavBar";
import { TriangleAlert } from "lucide-react";

import FoodCard from "../components/FoodCard";

function HomePage() {

    const {foods} = useContext(GlobalContext);
    const [search,setSearch] = useState("")
    const categorie = ["Tutti","Antipasti","Primi","Secondi","Lievitati","Dolci"]
    const [categoryQuery,setCategoryQuery] = useState("tutti")
    const [sortOrder, setSortOrder] = useState("az")

    const filteredFoods = useMemo(() => {
        if(!foods || foods.length === 0) return [];

        const normalizedSearch = search.trim().toLowerCase();
        const normalizedCategory = categoryQuery.toLowerCase();

        const filtered = foods.filter((food) => {
            const matchesSearch = food.title.toLowerCase().includes(normalizedSearch);
            const matchesCategory = normalizedCategory === "tutti"
                || food.category.toLowerCase().includes(normalizedCategory);

            return matchesSearch && matchesCategory;
        });

        return filtered.sort((firstFood, secondFood) => {
            const comparison = firstFood.title.localeCompare(secondFood.title);
            return sortOrder === "az" ? comparison : -comparison;
        });
    },[foods,search,categoryQuery,sortOrder])

    return (
        <div className="">
            
            <NavBar/>

            <div className="px-3 border-b border-slate-100 pb-10">
                <h1 className="text-[50px] md:text-[80px] font-bold w-[80%]"><span className="text-red-400">GUSTA</span> LA VERA TRADIZIONE <span className="text-red-400">CON NOI</span> </h1>
                <p className="w-full md:w-[70%] mt-4 text-lg">Piatti iconici da tutto il mondo, con ingredienti veri e ricette della tradizione. Tu pensa ad apparecchiare, al resto ci pensiamo noi.</p>
            </div>

            <p className="mx-3 mt-6 font-medium text-2xl">Cosa Vuoi Mangiare ?</p>
            <input className="w-[40%] mx-3 mt-5 border border-slate-200 py-2 pl-3 pr-4 rounded-full hover:border-slate-300 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 
                transition-colors duration-200" type="text" placeholder="Cerca Un Piatto..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />

            <div className="mx-3 mt-6">
                <p>Filtro per categoria</p>
                <div className="w-[80%] lg:w-[35%] flex justify-between mt-4">
                    {categorie.map(c => {
                        return <button onClick={() => {setCategoryQuery(c.toLowerCase())}} className={`border border-slate-200 py-2 pl-3 pr-4 rounded-full hover:border-slate-300 focus:outline-none focus:text-white focus:bg-black transition-colors duration-200 ${categoryQuery === c.toLowerCase() && "bg-black text-white"}`} key={c}>{c}</button>
                    })}
                </div>
            </div>

            <div className="mx-3 mt-6">
                <label htmlFor="sort-order" className="mr-3">Ordina per titolo</label>
                <select
                    id="sort-order"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border border-slate-200 rounded-full py-2 px-3"
                >
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
            
            {filteredFoods.length !== 0 ? (
                <p className="mx-3 mt-4 text-slate-500">{filteredFoods.length} piatti trovati</p>
            ) : (
                <div className="w-full mx-3 flex flex-col border-2 border-dashed border-gray-300 rounded-xl mt-15 items-center justify-center text-center py-10">
                    <TriangleAlert size={40} strokeWidth={1.6}/>
                    <h2 className="text-gray-800 font-medium tracking-wide mt-3">Nessun elemento trovato </h2>
                    <p className="text-gray-500 font-light mt-3 tracking-wide">Prova a effetttuare un altra ricerca </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 my-5">
                {filteredFoods.map((f) => {
                    return <FoodCard key={f.id} props={f}/>
                })}
            </div>
        </div>
    )
}

export default HomePage