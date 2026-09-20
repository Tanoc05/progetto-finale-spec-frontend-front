import { useState,useEffect } from "react";


function useComparator() {
  
    const [comparator,setComparator] = useState([]);

    const addFoodToCompare = (food) => {
        if(comparator.length === 2) return;
        setComparator([...comparator,food])
    }

    const removeFoodToCompare = (id) => {
        setComparator(comparator.filter(f => String(f.id) !== String(id)))
    }

    return {comparator,addFoodToCompare,removeFoodToCompare}
}


export default useComparator;