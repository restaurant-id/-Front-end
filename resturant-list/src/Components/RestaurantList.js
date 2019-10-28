import React,{useState, useEffect}from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
// import RestaurantCard from "./Components/RestaurantCards.js" 



export default function RestaurantList(props) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/cities")
        .then(res=>{
            setCities(res.data);
            console.log(res)
        })
        .catch(err => console.log(err));
    },[]);


    return(
        <div>
            {cities.map(city=>{
                return(<div></div>)
            })}
            
        </div>
    )
}

