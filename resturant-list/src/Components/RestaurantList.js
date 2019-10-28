import React,{useState, useEffect}from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import RestaurantCard from "../Components/RestaurantCards"


export default function RestaurantList(props) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/cities/1/restaurants")
        .then(res=>{
            setCities(res.data.restaurants);
            console.log(res.data.restaurants)
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

