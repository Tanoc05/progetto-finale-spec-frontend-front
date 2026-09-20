import { useState,useEffect } from "react";


function useFavourites() {
  
    const [favourites,setFavourites] = useState([]);

    const addFav = (food) => {
        if(favourites.length == 8) return alert("puoi aggiungere solo 8 preferiti come massimo")
        setFavourites((currentFavourites) => [...currentFavourites, food])
    }

    const removeFav = (id) => {
        setFavourites((currentFavourites) =>
            currentFavourites.filter((f) => String(f.id) !== String(id))
        )
    }
    
    return {favourites,addFav,removeFav}
}


export default useFavourites;