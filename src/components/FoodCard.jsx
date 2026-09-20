import { Link, Links } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MoveRight,Heart,Scale } from "lucide-react";

function FoodCard(f) {
  
    const food = f.props;
    const {id,title,category,createdAt,updatedAt} = food;
    const {favourites,addFav,removeFav} = useContext(GlobalContext);
  
    return (
        <Link to={`/food/${id}`}>
            <div className="mx-3 px-3 py-3 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md">
                <div className="flex justify-between mb-3">
                    <p className="text-red-400 bg-red-100 px-3 py-1 rounded-2xl">{category}</p>
                    <p className="text-slate-700">{`0${id}`}</p>
                </div>
                <div>
                    <p className="font-medium">{title}</p>
                </div>

                <div className="flex justify-between mt-5">
                    <p className="flex items-center gap-2 uppercase text-[12px] hover:underline">Scopri il piatto <MoveRight size={14}/></p>

                    <div className="flex gap-5 mr-2 items-center">
                        

                        {favourites.some(f => parseInt(f.id) === parseInt(id)) ? 
                            (<button 
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeFav(id)
                            }} 
                            className="text-red-400 bg-red-100 hover:bg-red-200 rounded-full p-2"><Heart strokeWidth={1.7}/></button>
                            ) : (
                            <button 
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                addFav(food)
                            }} 
                            className="bg-slate-100 text-slate hover:text-red-400 hover:bg-red-100 rounded-full p-2"><Heart strokeWidth={1.7}/></button>
                            )
                        }

                    </div>

                </div>

            </div>
        </Link>
    )
}

export default FoodCard