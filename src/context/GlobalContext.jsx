import { createContext } from "react";
import useFoods from "../hooks/useFoods";
import useFavourites from "../hooks/useFavourites";
import useComparator from "../hooks/useComparator";

export const GlobalContext = createContext();

export function GlobalProvider({children}){

    const foodData = useFoods();
    const favouritesData = useFavourites();
    const comparatorData = useComparator();

    return(
        <GlobalContext.Provider value={{...foodData,...favouritesData,...comparatorData}}>
            {children}
        </GlobalContext.Provider>
    )
}