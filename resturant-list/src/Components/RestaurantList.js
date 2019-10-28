import React,{useState, useEffect}from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import RestaurantCard from "../Components/RestaurantCards"



export default function RestaurantList(props) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/cities/4/restaurants")
        .then(res=>{
            setCities(res.data);
           
        })
        .catch(err => console.log(err));
    },[]);
    console.log(cities)

    const { restaurants } = cities;

    return(
        <div>
         {restaurants ? restaurants.map(city=>{
                 return(
                     <RestaurantCard 
                     />
                 )
               
                
            }):null}  
        
        </div>
    )
}

