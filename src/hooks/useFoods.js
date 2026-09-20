import { useState,useEffect } from "react";


function useFoods() {

    const [foods,setFoods] = useState([]);
    const API = "http://localhost:3001/foods"


    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(data => setFoods(data))
        .catch(err => console.error(err))
    },[])

    return {foods}
}

export default useFoods