import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TagComparator from "./TagComparator";


function ComparatorFoodCard(p) {

    const food = p.props;
    const {
        id,
        title,
        category,
        calories,
        proteins,
        carbs,
        fats,
        fiber,
        origin,
        season,
        isGlutenFree,
        isVegan,
        ingredients,
        storageMethod,
        description,
        imageUrl,
        createdAt,
        updatedAt
    } = food;

    const {comparator,addFoodToCompare,removeFoodToCompare} = useContext(GlobalContext);

    const otherFood = comparator.find(f => f.id !== id);

    return (
        
        <div className="">
            {otherFood && (
                <div className="bg-white border border-slate-100 rounded-lg">
                    <img className="w-[100%] h-[300px] object-cover object-bottom rounded-t-lg" src={imageUrl} alt={`${imageUrl}`} />
                    <div className="mx-3 mt-4">
                        <p className="text-red-300 uppercase text-sm">{category}</p>
                        <p className="font-bold tracking-wide mt-3">{title}</p>
                    </div>
                    <div className="flex flex-col gap-y-5 mx-3 mt-4">
                        
                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-2">
                            <p>CATEGORIA</p>
                            <p>{category}</p>
                        </div>

                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-2">
                            <p>ORIGINE</p>
                            <p>{origin}</p>
                        </div>

                        <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-2">
                            <p>CALORIE</p>
                            <div className="flex gap-4 items-center">
                                {calories < otherFood.calories && (
                                    <TagComparator props={"Piu Leggero"}/>
                                )}
                                <p>{calories}</p>
                            </div>
                        </div>

                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-2">
                            <p>PROTEINE</p>
                            <div className="flex gap-4 items-center">
                                {proteins > otherFood.proteins && (
                                    <TagComparator props={"Piu Proteico"}/>
                                )}
                                <p>{calories}</p>
                            </div>
                        </div>

                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-2">
                            <p>FIBRE</p>
                            <div className="flex gap-4 items-center">
                                {fiber > otherFood.fiber && (
                                    <TagComparator props={"Piu Fibre"}/>
                                )}
                                <p>{fiber}</p>
                            </div>
                        </div>

                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-2">
                            <p>GRASSI</p>
                            <div className="flex gap-4 items-center">
                                {fats < otherFood.fats && (
                                    <TagComparator props={"Meno Grassi"}/>
                                )}
                                <p>{fats}</p>
                            </div>
                        </div>

                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-2">
                            <p>SEASON</p>
                            <p>{season}</p>
                        </div>

                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-2">
                            <p>GLUTEN FREE</p>
                            <div className="flex gap-4 items-center">
                                {isGlutenFree && !otherFood.isGlutenFree && (
                                    <TagComparator props={"Questo Senza Glutine"}/>
                                )}
                                <p>{isGlutenFree ? "si" : "no" }</p>
                            </div>
                        </div>

                        <div className="flex justify-between border-b border-slate-200 pb-2 mb-2">
                            <p>VEGANO</p>
                            <div className="flex gap-4 items-center">
                                {isVegan && !otherFood.isVegan && (
                                    <TagComparator props={"Questo vegano"}/>
                                )}
                                <p>{isVegan ? "si" : "no"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-3 my-3 pb-5">
                        <p className="mb-4">INGRIEDENTI PRINCIPALI</p>
                        <div className="flex flex-wrap gap-3">
                            {ingredients.map(i => {
                                return (
                                    <p className="text-sm text-emerald-900 font-medium" key={i}>{i}</p>
                                )
                            })}
                        </div>
                    </div>

                    <div className="mx-3 pt-5 border-t border-slate-200">

                        <button onClick={() => removeFoodToCompare(id)} className="w-[95%] mx-3 mt-5 border border-slate-200 py-2 text-center rounded-full text-black mb-5">Rimuovi</button>

                        <Link to={`/food/${id}`}>
                            <div className="mx-3 bg-slate-900 py-2 text-center rounded-full text-white mb-5">
                                Vedi dettaglio   
                            </div>
                        </Link>

                    </div>
                </div>
            )}
        </div>
    )
}

export default ComparatorFoodCard