import { useParams } from "react-router-dom"
import { useState,useEffect, useContext } from "react"
import NavBar from "../components/NavBar";
import { Wheat,Beef,CookingPot,CakeSlice,Utensils,Soup ,Heart,Scale} from "lucide-react";
import { GlobalContext } from "../context/GlobalContext";

function FoodDetail() {

  const {id} = useParams();
  const [food,setFood] = useState();
  const API = "http://localhost:3001/foods"

  const {favourites,addFav,removeFav} = useContext(GlobalContext);
  const {comparator,addFoodToCompare,removeFoodToCompare} = useContext(GlobalContext);

  useEffect(() => {
    fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(data => setFood(data.food))
    .catch(err => console.error(err))
  },[id])

  if(!food){
    return <>caricamento</>
  }

  const icon = () => {
    const catNormalized = category.toLowerCase();
    if(catNormalized.includes("lievitati")){
      return <Wheat size={20} strokeWidth={1.8} />
    }else if(catNormalized.includes("primi")){
      return <CookingPot size={20} strokeWidth={1.8} />
    }else if(catNormalized.includes("secondi")){
      return <Beef size={20} strokeWidth={1.8} />
    }else if(catNormalized.includes("dolci")){
      return <CakeSlice size={20} strokeWidth={1.8} />
    }else if(catNormalized.includes("contorni")){
      return <Utensils size={20} strokeWidth={1.8} />
    }else if(catNormalized.includes("antipasti")){
      return <Soup size={20} strokeWidth={1.8} />
    }
    return null;
  }

  const {
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

  return (
    <div>
      
      <NavBar/>

      <div className="mx-3 mt-5">

        <div className="mb-5">
          <p className="text-3xl text-center font-medium">{title}</p>
        </div>

        <div className="md:flex">
         
          <div className="">
            <img
              className="h-[280px] w-full max-w-[600px] object-cover object-top rounded-lg md:h-[380px]"
              src={imageUrl}
              alt={`image of ${title}`}
            />
          </div>

          <div className="md:flex flex-col">
            <div className="mt-4 md:ml-2 lg:ml-4">
              <p className="text-green-900 font-medium">IL PIATTO</p>
              <p>{description}</p>
            </div>
            <div className="md:ml-2 mt-4">
              <p className="font-medium text-xl">Ingriedenti Principali</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {Array.isArray(ingredients) ? (ingredients.map((i) =>  
                  <div key={i} className="rounded-full bg-slate-100 px-2 py-1">
                    <p className="text-green-900">{i}</p>
                  </div>
                )) : (
                  <div className="">{ingredients}</div>
                )}
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-4 border border-slate-200 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-200">
            <p className="text-green-900">INFORMAZIONI</p>
            <div className="bg-green-900 rounded-full text-white font-light p-2 flex gap-2 items-center">
              <p>{icon()}</p>
              <p className="">{category.toLowerCase()}</p>
            </div>
          </div>   
          <div className="mt-3 grid grid-cols-2 gap-y-3">
            <div>
              <p className="text-slate-500">origine</p>
              <p>{origin}</p>
            </div>

            <div>
              <p className="text-slate-500">Calorie</p>  
              <p>{calories}Kcal x 100 g</p>         
            </div>

            <div>
              <p className="text-slate-500">Proteine</p>
              <p>{proteins}g x 100 g</p>
            </div>

            <div>
              <p className="text-slate-500">Carboidrati</p>
              <p>{carbs}g x 100 g</p>
            </div>

            <div>
              <p className="text-slate-500">grassi</p>      
              <p>{fats}g x 100 g</p>
            </div>

            <div>
              <p className="text-slate-500">fibre</p>
              <p>{fiber}g x 100 g</p>
            </div>

            <div>
              <p className="text-slate-500">season</p>
              <p>{season}</p>
            </div>

            <div>
              <p className="text-slate-500">Gluten free :</p>
              <p>{isGlutenFree ? "si" : "no"}</p>
            </div>

            <div>
              <p className="text-slate-500">Vegan :</p>
              <p>{isVegan ? "si" : "no"}</p>
            </div>
          </div>
          <div className="mt-6 border-b border-slate-200 pb-4">
            <p className="text-slate-500">Metoodo di conservazione :</p>
            <p>{storageMethod}</p>
          </div>

          {favourites.some(f => parseInt(f.id) === parseInt(id)) ? 
            (<button 
              onClick={() => {
                removeFav(id)
                console.log("Favorito rimosso:", food);
                console.log("Preferiti attuali:", favourites);
              }} 
              className="w-full border border-red-400 mt-4 rounded-full py-2 text-red-400 shadow-sm">Rimuovi dai preferiti</button>
            ) : (
              <button 
              onClick={() => {
                addFav(food);
                console.log("Favorito aggiunto:", food);
                console.log("Preferiti attuali:", favourites);
              }} 
              className="w-full border border-red-400 mt-4 rounded-full py-2 bg-red-400 text-white shadow-sm">Aggiungi ai preferiti</button>
            )
          }
          {comparator.some(f => parseInt(f.id) === parseInt(id)) ? 
            (<button 
              onClick={() => {
                removeFoodToCompare(id)
              }} 
              className="w-full bg-slate-900 text-white border border-slate-600 mt-4 rounded-full py-2">rimuovi dal confronto</button>
            ) : (
              <button 
              onClick={() => {
                addFoodToCompare(food)
                console.log("Favorito aggiunto:", food);
                console.log("Preferiti attuali:", favourites);
              }} 
              className="w-full bg-slate-900 text-white border border-slate-600 mt-4 rounded-full py-2">Seleziona per il confronto</button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FoodDetail