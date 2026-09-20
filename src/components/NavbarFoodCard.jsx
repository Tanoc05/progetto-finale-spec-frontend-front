import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Scale,Trash } from "lucide-react";

function NavbarFoodCard(f) {


    const food = f.props;
    const {id,title,category,imageUrl} = food;

    const {removeFav} = useContext(GlobalContext);
    const {comparator,addFoodToCompare,removeFoodToCompare} = useContext(GlobalContext);

    return (
        <div className="">
            <div className="flex">
                <img className="w-[100px] h-[100px] object-cover object-bottom rounded-lg" src={imageUrl} alt={`${title} - image`} />
                <div className="p-3">
                    <p className="text-red-300">{category}</p>
                    <p className="font-medium">{title}</p>
                    <div className="flex mt-1 gap-2">
                        
                        {comparator.some(f => parseInt(f.id) === parseInt(id)) ? 
                            (<button 
                            onClick={() => {
                                removeFoodToCompare(id)
                            }} 
                            className="flex items-center gap-1 border border-slate-200 px-2 py-1 rounded-full text-[14px]">
                                <Scale size={15}/>
                                <p>non confrontare</p>
                            </button>
                            ) : (
                            <button 
                            onClick={() => {
                                addFoodToCompare(food)
                            }} 
                            className="flex items-center gap-1 border border-slate-200 px-2 py-1 rounded-full text-[14px]">
                                <Scale size={15}/>
                                <p>confronta</p> 
                            </button>
                            )
                        }

                        <div onClick={() => removeFav(id)} className="flex items-center gap-1 border border-red-200 px-2 py-1 rounded-full text-[14px]">
                            <Trash size={15} color="red"/>
                            <p className="text-red-400">elimina</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarFoodCard